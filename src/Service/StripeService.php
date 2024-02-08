<?php

namespace App\Service;

use App\Entity\Cart;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Stripe\Refund;
use Stripe\Webhook;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class StripeService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private Security $security,
        private UserRepository $userRepository,
        private UrlGeneratorInterface $router
    ) {
        Stripe::setApiKey('sk_test_51OKqCHE9VPfeCGyPUb6Q3vdXTOLrBJRavBd0IvB47nqCiUh83aXmlmCRdf187Rl3ouTBm6nB3qT4UgXZ6jjjEKW000FEkrY0vw');
    }

    public function createCheckoutSession(Cart $cart, array $params = null)
    {
        $items = [];
        /** @var User */
        $user = $this->security->getUser();

        foreach($cart->getCartProducts()->toArray() as $cartProduct) {
            // array_push($items, ['price' => $cartProduct->getProduct()->getStripePriceId(), 'quantity' => 1]);
            array_push($items, [
                'price_data' => [
                    'product_data' => [
                        'name' => $cartProduct->getProduct()->getName(),
                        'metadata' => [
                            'product_id' => $cartProduct->getProduct()->getId(),
                        ],
                    ],
                    'currency' => 'eur',
                    'unit_amount' => $cartProduct->getProduct()->getPriceInCents(),
                ],
                'quantity' => 1,
            ]);
        }

        $defaultParams = [
            'ui_mode' => 'embedded',
            'line_items' => $items,
            'mode' => 'payment',
            'return_url' => $this->router->generate('app_payment_success', [], UrlGeneratorInterface::ABSOLUTE_URL),
            'metadata' => [
                'user_id' => $user->getId()
            ],
            'customer_email' => $user->getEmail(),
        ];
        
        if($params !== null) {
            $mergedParams = array_merge($defaultParams, $params);
            $checkoutSession = Session::create($mergedParams);
            return $checkoutSession;
        }

        $checkoutSession = Session::create($defaultParams);
        return $checkoutSession;
    }

    public function refundPayment($paymentIntentId) 
    {
        Refund::create(['payment_intent' => $paymentIntentId]);
    }

    public function getWebhookEvent(Request $request)
    {
        $payload = $request->getContent();
        $sigHeader = $request->headers->get('Stripe-Signature');
        $endpointSecret = 'whsec_xBeI8BjQ1HLyXJmGBJCYm3Yd7w5NWdZl';

        $event = null;

        $event = Webhook::constructEvent($payload, $sigHeader, $endpointSecret);

        return $event;
    }

    public function retrieveEventSession($event): Session
    {
        if($event->type == 'checkout.session.completed') {
            return Session::retrieve([
                'id' => $event->data->object->id,
                'expand' => [
                    'line_items',
                    'line_items.data.price.product',
                ],
            ]);
        }
        
        return null;
    }
}