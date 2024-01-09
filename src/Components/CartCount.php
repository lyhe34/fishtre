<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\Attribute\LiveListener;

#[AsLiveComponent]
class CartCount
{
    use DefaultActionTrait;

    #[LiveProp]
    public int $count = 0;

    #[LiveListener('cartProductAdded')]
    public function incrementProductCount()
    {
        $this->count++;
    }

    #[LiveListener('cartProductRemoved')]
    public function decrementProductCount()
    {
        $this->count--;
    }
}