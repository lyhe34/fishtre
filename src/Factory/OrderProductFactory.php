<?php

namespace App\Factory;

use App\Entity\OrderProduct;
use App\Entity\Product;
use App\Entity\Order;

class OrderProductFactory
{
    public function create(Product $product, Order $order, int $quantity)
    {
        $orderProduct = new OrderProduct();

        $orderProduct->setProductName($product->getName());
        $orderProduct->setProduct($product);
        $orderProduct->setOrder($order);
        $orderProduct->setQuantity($quantity);

        return $orderProduct;
    }
}