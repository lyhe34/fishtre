<?php

namespace App\Controller;

use App\Factory\OrderFactory;
use App\Repository\UserRepository;
use App\Service\CartManager;
use App\Service\StripeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Stripe\Exception\ApiErrorException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class WebhookController extends AbstractController
{
    public function __construct(
        private StripeService $stripeService,
        private OrderFactory $orderFactory,
        private EntityManagerInterface $entityManager,
        private CartManager $cartManager,
        private UserRepository $userRepository,
    ) {
        
    }

    #[Route('/stripe/webhook', name: 'app_stripe_webhook')]
    public function stripeWebhook(Request $request): JsonResponse
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

                $user = $this->userRepository->find($session->metadata['user_id']);
                $user->getCart()->clear();

                $order = $this->orderFactory->create($session);

                $this->entityManager->persist($order);
                $this->entityManager->flush();

                break;
        }
        
        return new JsonResponse('Webhook Received: ' . $event->id, 200);
    }
}