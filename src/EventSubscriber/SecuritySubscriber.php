<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;
use App\Entity\Cart;
use App\Service\SessionStorage;
use Doctrine\ORM\EntityManagerInterface;

class SecuritySubscriber implements EventSubscriberInterface
{
    public function __construct(
        private SessionStorage $sessionStorage,
        private EntityManagerInterface $entityManager
    ) {
        
    }

    public function onLoginSuccessEvent(LoginSuccessEvent $event): void
    {
        /** @var User */
        $user = $event->getUser();
        $userCart = $user->getCart();

        if($userCart->getCartProducts()->count() > 0) {
            return;
        }

        $sessionCart = $this->sessionStorage->get('cart', Cart::class);

        if($sessionCart === null) {
            return;
        }
        
        $userCart->setCartProducts($sessionCart->getCartProducts());

        $this->entityManager->remove($sessionCart);
        $this->entityManager->persist($userCart);
        $this->entityManager->flush();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            LoginSuccessEvent::class => ['onLoginSuccessEvent'],
        ];
    }
}
