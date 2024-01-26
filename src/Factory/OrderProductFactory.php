<?php

namespace App\Factory;

use App\Entity\OrderProduct;
use App\Entity\Product;
use App\Entity\Order;

class OrderProductFactory
{
    public function create(Product $product, Order $order)
    {
        $orderProduct = new OrderProduct();

        $orderProduct->setProduct($product);
        $orderProduct->setOrder($order);

        return $orderProduct;
    }
}