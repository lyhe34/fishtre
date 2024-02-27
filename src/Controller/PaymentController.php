<?php

namespace App\Controller;

use App\Entity\Order;
use App\Factory\OrderFactory;
use App\Repository\ProductRepository;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\CartManager;
use App\Service\ConfigManager;
use App\Service\Shipping;
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
        private Shipping $shipping,
        private ProductRepository $productRepository,
    ) {
        
    }

    #[Route('/payment/checkout/shipping', name: 'app_payment_checkout_delivery')]
    public function checkoutShipping(): Response
    {
        if($this->cartManager->getCart()->getCartProducts()->count() <= 0) {
            return $this->redirectToRoute('app_cart');
        }

        /** @var user */
        $user = $this->getUser();
        $address = $user->getAddress();

        if($address === null) {
            return $this->redirectToRoute('app_cart');
        }

        if(!$this->shipping->isAddressAllowed($address)) {
            $this->addFlash('cart_error', "Votre addresse n'est plus valide.");
            $user->setAddress(null);
            $this->entityManager->flush();
            return $this->redirectToRoute('app_cart');
        }

        $this->entityManager->flush();

        $shippingCost = $this->shipping->calculateShippingCost($this->cartManager->getCart()->getPrice(), $address);

        $checkoutSession = $this->stripeService->createCheckoutSession($this->cartManager->getCart(), [
            'shipping_options' => [[
                'shipping_rate_data' => [
                    'type' => 'fixed_amount',
                    'fixed_amount' => [
                        'amount' => $shippingCost * 100,
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
        if($this->cartManager->getCart()->getCartProducts() <= 0) {
            return $this->redirectToRoute('app_cart');
        }

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

        $this->entityManager->flush();

        return $this->render('payment/success.html.twig', [
        ]);
    }

    #[Route('/payment/refund/{order}', name: 'app_refund')]
    public function refund(Order $order)
    {
        /** @var User */
        $user = $this->getUser();

        // Verify that this order is from the user.
        if($order->getUser()->getId() !== $user->getId()) {
            return $this->redirectToRoute('app_orders');
        }

        if($order->getState() === Order::STATE_CONFIRMED) {
            $this->stripeService->refundPayment($order->getPaymentIntentId());
            $order->setState(Order::STATE_CANCELED);
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
