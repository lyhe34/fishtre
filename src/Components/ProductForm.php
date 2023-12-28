<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class ProductForm
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public float $quantity = 0.2;

    public function getQuantity()
    {
        return $this->quantity;
    }
}