<?php

namespace App\Service;

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
        private UrlGeneratorInterface $router,
        private string $stripe_secret_key,
        private string $stripe_webhook_secret,
    ) {
        Stripe::setApiKey($this->stripe_secret_key);
    }

    public function createCheckoutSession(array $params = null)
    {
        $items = [];
        /** @var User */
        $user = $this->security->getUser();

        // Set checkout session products data
        foreach($user->getCart()->getCartProducts() as $cartProduct) {
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
                'quantity' => $cartProduct->getQuantity(),
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
            'expires_at' => time() + (60 * 30),
        ];
        
        // Merge default parameters with additional parameters
        if($params !== null) {
            $mergedParams = array_merge_recursive($defaultParams, $params);
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

    public function expireCheckoutSession($checkoutSessionId)
    {
        $session = Session::retrieve($checkoutSessionId);

        if($session->status === 'open') {
            $session->expire();
        }
    }

    public function getWebhookEvent(Request $request)
    {
        $payload = $request->getContent();
        $sigHeader = $request->headers->get('Stripe-Signature');
        $endpointSecret = $this->stripe_webhook_secret;

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