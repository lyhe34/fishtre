<?php

namespace App\Factory;

use App\Repository\ProductRepository;
use Stripe\Checkout\Session;
use Symfony\Bundle\SecurityBundle\Security;
use App\Entity\Order;
use App\Repository\UserRepository;
use App\Service\ConfigManager;
use App\Service\OrderDating;
use DateTimeImmutable;
use DateTimeZone;
use Doctrine\ORM\EntityManagerInterface;

class OrderFactory
{
    public function __construct(
        private Security $security,
        private OrderProductFactory $orderProductFactory,
        private ProductRepository $productRepository,
        private EntityManagerInterface $entityManager,
        private UserRepository $userRepository,
        private OrderDating $orderDating,
        private ConfigManager $configManager,
    ) {
        
    }

    public function create(Session $session)
    {
        $user = $this->userRepository->find($session->metadata['user_id']);
        $userAddress = $user->getAddress();

        $order = new Order();
        $order->setUser($user);
        $order->setDate(new DateTimeImmutable('now', new DateTimeZone('Europe/Paris')));
        $order->setDeliveryDate($this->orderDating->getOrderDeliveryDate($order->getDate()));
        $order->setState('confirmed');
        $order->setPaymentIntentId($session->payment_intent);

        if(empty($session->shipping_options)) {
            $order->setMode('pickup');
            $order->setShippingCost(0);

        } else {
            $order->setMode('shipping');
            $order->setAddress1($userAddress->getAddress1());
            $order->setAddress2($userAddress->getAddress2());
            $order->setPostalCode($userAddress->getPostalCode());
            $order->setCity($userAddress->getCity());
            $order->setFirstName($userAddress->getFirstName());
            $order->setLastName($userAddress->getLastName());
            $order->setPhone($userAddress->getPhone());
            $order->setShippingCost($session->shipping_cost['amount_total'] / 100);
        }

        // set order products
        foreach($session->line_items as $item) {
            $product = $this->productRepository->find($item->price->product->metadata['product_id']);
            if($product) {
                $orderProduct = $this->orderProductFactory->create($product, $order);
                $this->entityManager->persist($orderProduct);
                $order->addOrderProduct($orderProduct);
            }
        }

        return $order;
    }
}