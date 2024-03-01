<?php

namespace App\Factory;

use App\Entity\CartProduct;
use App\Entity\Product;

class CartProductFactory
{
    public function create(Product $product, int $quantity = 1): CartProduct
    {
        $cartProduct = new CartProduct();

        $cartProduct->setProduct($product);
        $cartProduct->setQuantity($quantity);
        
        return $cartProduct;
    }
}