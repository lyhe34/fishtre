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

use function Symfony\Component\Clock\now;

#[Route('/payment')]
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

    #[Route('/checkout/shipping', name: 'app_payment_checkout_shipping')]
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

        // Check if address is still valid, if not, delete address, redirect and notify user
        if(!$this->shipping->isAddressAllowed($address)) {
            $this->addFlash('cart_error', "Votre addresse n'est plus valide.");
            $user->setAddress(null);
            $this->entityManager->flush();
            return $this->redirectToRoute('app_cart');
        }
        
        // Prevent user form having multiple checkout session active
        if($currentCheckoutSessionId = $user->getCurrentCheckoutSessionId()) {
            $this->stripeService->expireCheckoutSession($currentCheckoutSessionId);
        }

        $cart = $this->cartManager->getCart();

        // Prevent product reserved to go back to stock during checkout
        foreach($cart->getCartProducts() as $cartProduct) {
            $cartProduct->setUpdatedAt(now());
        }

        $shippingCost = $this->shipping->calculateShippingCost($cart->getPrice(), $address);

        $checkoutSession = $this->stripeService->createCheckoutSession([
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

        $user->setCurrentCheckoutSessionId($checkoutSession->id);
        $this->entityManager->flush();

        return $this->render('payment/checkout.html.twig', [
            'clientSecret' => $checkoutSession->client_secret,
        ]);
    }

    #[Route('/checkout/pickup', name: 'app_payment_checkout_pickup')]
    public function checkoutPickup(): Response
    {
        if($this->cartManager->getCart()->getCartProducts()->count() <= 0) {
            return $this->redirectToRoute('app_cart');
        }

        // Prevent product reserved to go back to stock during checkout
        foreach($this->cartManager->getCart()->getCartProducts() as $cartProduct) {
            $cartProduct->setUpdatedAt(now());
        }

        /** @var user */
        $user = $this->getUser();

        // Prevent user form having multiple checkout session active
        if($currentCheckoutSessionId = $user->getCurrentCheckoutSessionId()) {
            $this->stripeService->expireCheckoutSession($currentCheckoutSessionId);
        }

        $checkoutSession = $this->stripeService->createCheckoutSession();

        $user->setCurrentCheckoutSessionId($checkoutSession->id);
        $this->entityManager->flush();

        return $this->render('payment/checkout.html.twig', [
            'clientSecret' => $checkoutSession->client_secret,
        ]);
    }

    #[Route('/success', name: 'app_payment_success')]
    public function success()
    {  
        $cart = $this->cartManager->getCart();
        
        $cart->clear();

        $this->entityManager->flush();

        return $this->render('payment/success.html.twig', [
        ]);
    }

    #[Route('/refund/{order}', name: 'app_refund')]
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
}

// #[Route('/payment')]
// class PaymentController extends AbstractController
// {
//     #[Route('/checkout/pickup', name: 'app_payment_checkout_pickup')]
//     public function checkoutPickup(): Response
//     {
//         if($this->cartManager->getCart()->getCartProducts()->count() <= 0) {
//             return $this->redirectToRoute('app_cart');
//         }

//         // Prevent product reserved to go back to stock during checkout
//         foreach($this->cartManager->getCart()->getCartProducts() as $cartProduct) {
//             $cartProduct->setUpdatedAt(now());
//         }

//         /** @var user */
//         $user = $this->getUser();

//         // Prevent user form having multiple checkout session active
//         if($currentCheckoutSessionId = $user->getCurrentCheckoutSessionId()) {
//             $this->stripeService->expireCheckoutSession($currentCheckoutSessionId);
//         }

//         $checkoutSession = $this->stripeService->createCheckoutSession();

//         $user->setCurrentCheckoutSessionId($checkoutSession->id);
//         $this->entityManager->flush();

//         return $this->render('payment/checkout.html.twig', [
//             'clientSecret' => $checkoutSession->client_secret,
//         ]);
//     }
// }

// class
