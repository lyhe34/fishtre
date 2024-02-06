<?php

namespace App\EventSubscriber;

use App\Entity\Order;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use App\Service\StripeService;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityUpdatedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private StripeService $stripeService,
    ) {

    }

    public function cancelOrder(AfterEntityUpdatedEvent $event): void
    {
        $entity = $event->getEntityInstance();

        if($entity instanceof Order) {
            if($entity->getState() === Order::STATE_CANCELED) {
                $this->stripeService->refundPayment($entity->getPaymentIntentId());
            }
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AfterEntityUpdatedEvent::class => ['cancelOrder'],
        ];
    }
}
