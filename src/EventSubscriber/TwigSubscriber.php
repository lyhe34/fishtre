<?php

namespace App\EventSubscriber;

use App\Service\CartManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Twig\Environment;

class TwigSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private CartManager $cartManager,
        private Environment $twig,
    ) {
        
    }

    public function onKernelController($event): void
    {
        $this->twig->addGlobal('cart', $this->cartManager->getCart());
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ControllerEvent::class => 'onKernelController',
        ];
    }
}
