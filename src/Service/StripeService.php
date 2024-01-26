<?php

namespace App\Service;

use App\Entity\Cart;
use App\Entity\Product;
use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;
use Stripe\Customer;
use Stripe\Product as StripeProduct;
use Stripe\Price as StripePrice;
use Stripe\Refund;
use Stripe\Webhook as StripeWebhook;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\SecurityBundle\Security;

class StripeService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private Security $security,
        private UserRepository $userRepository,
    ) {
        Stripe::setApiKey('sk_test_51OKqCHE9VPfeCGyPUb6Q3vdXTOLrBJRavBd0IvB47nqCiUh83aXmlmCRdf187Rl3ouTBm6nB3qT4UgXZ6jjjEKW000FEkrY0vw');
    }

    public function createStripeProduct(Product $product)
    {
        $stripeProduct = StripeProduct::create([
                'name' => $product->getName(),
            ]
        );

        $stripePrice = StripePrice::create([
                'product' => $stripeProduct->id,
                'unit_amount' => $product->getPrice() * 100,
                'currency' => 'eur',
            ]
        );  

        return $stripeProduct;
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
            'return_url' => 'https://localhost:8000/payment/success?session_id={CHECKOUT_SESSION_ID}',
            'metadata' => [
                'user_id' => $user->getId()
            ],
            'customer_email' => $user->getEmail(),
        ];
        
        if($params !== null) {
            $mergedParams = array_merge($defaultParams, $params);
            $checkoutSession = StripeSession::create($mergedParams);
            return $checkoutSession;
        }

        $checkoutSession = StripeSession::create($defaultParams);
        return $checkoutSession;
    }

    public function createCustomer(User $user): ?Customer
    {
        $customer = Customer::create([
            'email' => $user->getEmail(),
        ]);

        $user->setStripeId($customer->id);
        
        return $customer;
    }

    public function refundPayment($paymentIntentId) 
    {
        Refund::create(['payment_intent' => $paymentIntentId]);
    }

    public function getWebhookEvent(Request $request)
    {
        $payload = $request->getContent();
        $sigHeader = $request->headers->get('Stripe-Signature');
        $endpointSecret = 'whsec_cacbadb14f945992a2c70a2741a64dcdd1931d824a37feae9d551184c7b8535f';

        $event = null;

        $event = StripeWebhook::constructEvent($payload, $sigHeader, $endpointSecret);

        return $event;
    }

    public function retrieveEventSession($event): StripeSession
    {
        if($event->type == 'checkout.session.completed') {
            return StripeSession::retrieve([
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