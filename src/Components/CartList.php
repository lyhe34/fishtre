<?php

namespace App\Components;

use App\Entity\CartProduct;
use App\Service\ArrayTools;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;

#[AsLiveComponent]
class CartList
{    
    use DefaultActionTrait;

    /** @var CartProduct[] */
    #[LiveProp]
    public $cartProducts = [];

    public function __construct(private ArrayTools $arrayTools) 
    {
        
    }

    #[LiveListener('cartProductAdded')]
    public function addCartProduct(#[LiveArg] CartProduct $cartProduct)
    {
        array_push($this->cartProducts, $cartProduct);
    }

    #[LiveListener('cartProductRemoved')]
    public function removeCartProduct(#[LiveArg] CartProduct $cartProduct)
    {
        $this->arrayTools->removeBy($this->cartProducts, 'id', $cartProduct->getId());
    }
}