<?php

namespace App\Factory;

use App\Entity\FishProduct;
use App\Entity\Product;

class ProductFactory
{
    public function create(FishProduct $fishProduct): Product
    {
        $product = new Product();

        $product->setName($fishProduct->getFullName());
        $product->setPrice($fishProduct->getPrice());

        if($fishProductImage = $fishProduct->getImage())
        {
            $product->setImage($fishProductImage);
        }
        else
        {
            $product->setImage($fishProduct->getFish()->getImage());
        }

        return $product;
    }
}