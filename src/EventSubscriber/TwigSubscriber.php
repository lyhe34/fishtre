<?php

namespace App\EventSubscriber;

use App\Service\CartManager;
use App\Service\ConfigManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Twig\Environment;

class TwigSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private CartManager $cartManager,
        private ConfigManager $configManager,
        private Environment $twig,
    ) {
        
    }

    public function onKernelController($event): void
    {
        $this->twig->addGlobal('cartManager', $this->cartManager);
        $this->twig->addGlobal('configManager', $this->configManager);
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ControllerEvent::class => 'onKernelController',
        ];
    }
}
