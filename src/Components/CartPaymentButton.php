<?php

namespace App\Components;

use App\Service\CartManager;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class CartPaymentButton
{
    use DefaultActionTrait;

    #[LiveProp]
    public bool $show;

    public function __construct(
        private CartManager $cartManager,
    ) {
        
    }

    #[LiveListener('cartProductAdded')]
    public function onCartProductAdded()
    {
        $this->show = $this->cartManager->getCart()->getCartProducts()->count() > 0;
    }

    #[LiveListener('cartProductRemoved')]
    public function onCartProductRemoved()
    {
        $this->show = $this->cartManager->getCart()->getCartProducts()->count() > 0;
    }
}