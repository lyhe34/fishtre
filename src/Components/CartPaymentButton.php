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

    #[LiveListener('cartChanged')]
    public function onCartChanged()
    {
        $this->show = $this->cartManager->getCart()->getCartProducts()->count() > 0;
    }
}