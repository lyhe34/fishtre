<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentToolsTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use App\Entity\CartProduct;

#[AsLiveComponent]
class CartPrice
{
    use ComponentToolsTrait;
    use DefaultActionTrait;

    #[LiveProp]
    public int $totalPrice;
    
    #[LiveListener('cartProductAdded')]
    public function addProductPrice(#[LiveArg] CartProduct $cartProduct)
    {
        $this->totalPrice += $cartProduct->getPrice();
    }

    #[LiveListener('cartProductRemoved')]
    public function removeProductPrice(#[LiveArg] CartProduct $cartProduct)
    {
        $this->totalPrice -= $cartProduct->getPrice();
    }
}