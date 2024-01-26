<?php

namespace App\Controller;

use App\Entity\Order;
use App\Factory\OrderFactory;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CartManager;
use App\Service\ConfigManager;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Exception\ApiErrorException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class PaymentController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private CartManager $cartManager,
        private EntityManagerInterface $entityManager,
        private OrderFactory $orderFactory,
        private ConfigManager $configManager,
    ) {
        
    }

    #[Route('/payment/checkout/shipping', name: 'app_payment_checkout_delivery')]
    public function checkoutShipping(): Response
    {
        /** @var User */
        $user = $this->getUser();

        $cart = $user->getCart();
        $shippingCost = $cart->getTotalPrice() >= $this->configManager->getConfig()->getFreeShipMinCost() ? 0 : $user->getAddress()->getShippingCost() * 100;

        $checkoutSession = $this->stripeService->createCheckoutSession($this->cartManager->getCart(), [
            'shipping_options' => [[
                'shipping_rate_data' => [
                    'type' => 'fixed_amount',
                    'fixed_amount' => [
                        'amount' => $shippingCost,
                        'currency' => 'eur',
                    ],
                    'display_name' => 'Livraison à domicile',
                ],
            ]],
        ]);

        return $this->render('payment/checkout.html.twig', [
            'clientSecret' => $checkoutSession->client_secret,
        ]);
    }

    #[Route('/payment/checkout/pickup', name: 'app_payment_checkout_pickup')]
    public function checkoutPickup(): Response
    {
        $checkoutSession = $this->stripeService->createCheckoutSession($this->cartManager->getCart());

        return $this->render('payment/checkout.html.twig', [
            'clientSecret' => $checkoutSession->client_secret,
        ]);
    }

    #[Route('/payment/success', name: 'app_payment_success')]
    public function success()
    {  
        $cart = $this->cartManager->getCart();
        
        $cart->clear();

        $this->entityManager->persist($cart);
        $this->entityManager->flush();

        return $this->render('payment/success.html.twig', [
        ]);
    }

    #[Route('/payment/refund/{order}', name: 'app_refund')]
    public function refund(Order $order)
    {
        /** @var User */
        $user = $this->getUser();

        if($order->getUser()->getId() !== $user->getId()) {
            return $this->redirectToRoute('app_orders');
        }

        if($order->getState() === Order::STATE_CONFIRMED) {
            $this->stripeService->refundPayment($order->getPaymentIntentId());
            $order->setState(Order::STATE_CANCELED);
            $this->entityManager->persist($order);
            $this->entityManager->flush();
        }

        return $this->redirectToRoute('app_orders');
    }

    #[Route('/webhook', name: 'app_webhook')]
    public function webhook(Request $request): JsonResponse
    {
        try  {
            $event = $this->stripeService->getWebhookEvent($request);
        } catch (\UnexpectedValueException $e) {
            return new JsonResponse('Webhook Error: ' . $e->getMessage(), 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            return new JsonResponse('Webhook Error: ' . $e->getMessage(), 400);
        }

        switch($event->type) {
            case 'checkout.session.completed':
                try {
                    $session = $this->stripeService->retrieveEventSession($event);
                } catch (ApiErrorException $e) {
                    return new JsonResponse('Session Error: ' . $e->getMessage(), 400);
                }

                $order = $this->orderFactory->create($session);

                $this->entityManager->persist($order);
                $this->entityManager->flush();

                break;
        }
        
        return new JsonResponse('Webhook Received: ' . $event->id, 200);
    }
}
