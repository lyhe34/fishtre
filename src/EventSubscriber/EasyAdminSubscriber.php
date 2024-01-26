<?php

namespace App\EventSubscriber;

use App\Entity\Fish;
use App\Entity\Order;
use App\Factory\ProductFactory;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use App\Service\StripeService;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityUpdatedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private ProductFactory $productFactory,
        private StripeService $stripeService,
    ) {

    }

    public function createProductForFish(BeforeEntityUpdatedEvent $event): void
    {
        $entity = $event->getEntityInstance();

        if($entity instanceof Fish) {
            foreach($entity->getFishProducts()->getValues() as $fishProduct) {
                $product = $this->productFactory->create($fishProduct);
                $this->entityManager->persist($product);
                $fishProduct->setProduct($product);
            }
        }
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
            BeforeEntityUpdatedEvent::class => ['createProductForFish'],
            AfterEntityUpdatedEvent::class => ['cancelOrder'],
        ];
    }
}
