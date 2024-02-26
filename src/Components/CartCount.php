<?php

namespace App\Components;

use App\Service\CartManager;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\Attribute\LiveListener;

#[AsLiveComponent]
class CartCount
{
    use DefaultActionTrait;

    public function __construct(
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveProp]
    public int $count = 0;

    #[LiveListener('cartChanged')]
    public function setCount()
    {
        $this->count = $this->cartManager->getCart()->getProductsQuantity();
    }
}