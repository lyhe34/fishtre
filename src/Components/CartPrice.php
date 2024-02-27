<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use App\Service\CartManager;

#[AsLiveComponent]
class CartPrice
{
    use ComponentToolsTrait;
    use DefaultActionTrait;

    #[LiveProp]
    public float $price;
    
    public function __construct(
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $this->price = $this->cartManager->getCart()->getPrice();
    }
}