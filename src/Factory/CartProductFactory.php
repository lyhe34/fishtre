<?php

namespace App\Factory;

use App\Entity\CartProduct;
use App\Entity\Cart;
use App\Entity\Product;

class CartProductFactory
{
    public function create(Cart $cart, Product $product): CartProduct
    {
        $cartProduct = new CartProduct();

        $cartProduct->setCart($cart);
        $cartProduct->setProduct($product);

        return $cartProduct;
    }
}