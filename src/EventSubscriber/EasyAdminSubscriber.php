<?php

namespace App\EventSubscriber;

use App\Entity\Order;
use App\Entity\Product;
use App\Repository\CartProductRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use App\Service\StripeService;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use EasyCorp\Bundle\EasyAdminBundle\Event\AfterEntityUpdatedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private StripeService $stripeService,
        private CartProductRepository $cartProductRepository,
        private EntityManagerInterface $entityManager,
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

    public function deactivateProduct(AfterEntityUpdatedEvent $event)
    {
        $entity = $event->getEntityInstance();

        if($entity instanceof Product) {
            if(!$entity->isActive()) {
                $cartProductsToRemove = $this->cartProductRepository->findBy(['product' => $entity]);
                foreach($cartProductsToRemove as $cartProductToRemove) {
                    $this->entityManager->remove($cartProductToRemove);
                }
                $this->entityManager->flush();
            }
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AfterEntityUpdatedEvent::class => ['cancelOrder', 'deactiveProduct'],
        ];
    }
}

// class EasyAdminSubscriber implements EventSubscriberInterface
// {
//     public function cancelOrder(AfterEntityUpdatedEvent $event): void
//     {
//         $entity = $event->getEntityInstance();

//         if($entity instanceof Order) {
//             if($entity->getState() === Order::STATE_CANCELED) {
//                 $this->stripeService->refundPayment($entity->getPaymentIntentId());
//             }
//         }
//     }
// }

// c