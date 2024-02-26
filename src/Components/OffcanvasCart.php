<?php

namespace App\Components;

use App\Entity\Cart;
use App\Service\CartManager;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class OffcanvasCart
{
    use DefaultActionTrait;
    
    #[LiveProp]
    public bool $isCartEmpty;

    public function __construct(
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $this->isCartEmpty = $this->cartManager->getCart()->getCartProducts()->count() <= 0;
    }
}