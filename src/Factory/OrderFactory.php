<?php

namespace App\Factory;

use App\Entity\Address;
use App\Repository\ProductRepository;
use Stripe\Checkout\Session;
use Symfony\Bundle\SecurityBundle\Security;
use App\Entity\Order;
use App\Repository\UserRepository;
use App\Service\ConfigManager;
use App\Service\OrderHelper;
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
        private OrderHelper $orderHelper,
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
        $order->setDeliveryDate($this->orderHelper->getOrderDeliveryDate($order->getDate()));
        $order->setState(Order::STATE_CONFIRMED);
        $order->setPaymentIntentId($session->payment_intent);

        if(empty($session->shipping_options)) {
            $order->setMode('pickup');
            $order->setShippingCost(0);
        } else {
            $address = new Address();
            $address->setStreetName1($userAddress->getStreetName1());
            $address->setStreetName2($userAddress->getStreetName2());
            $address->setPostalCode($userAddress->getPostalCode());
            $address->setCity($userAddress->getCity());
            $address->setFirstName($userAddress->getFirstName());
            $address->setLastName($userAddress->getLastName());
            $address->setPhone($userAddress->getPhone());

            $order->setAddress($address);
            $order->setMode('shipping');
            $order->setShippingCost($session->shipping_cost['amount_total'] / 100);
        }

        // Set order products.
        foreach($session->line_items as $item) {
            $product = $this->productRepository->find($item->price->product->metadata['product_id']);
            if($product) {
                $orderProduct = $this->orderProductFactory->create($product, $order, $item->quantity);
                $order->addOrderProduct($orderProduct);
            }
        }

        return $order;
    }
}

// class OrderFactory
// {
//     /**
//      * Create an order from a checkout session data
//      * 
//      * @param Session $session The checkout session used to created order
//      * 
//      * @return Order The order created
//      */
//     public function create(Session $session)
//     {
//         $user = $this->userRepository->find($session->metadata['user_id']);
//         $userAddress = $user->getAddress();

//         $order = new Order();
//         $order->setUser($user);
//         $order->setDate(new DateTimeImmutable('now', new DateTimeZone('Europe/Paris')));
//         $order->setDeliveryDate($this->orderHelper->getOrderDeliveryDate($order->getDate()));
//         $order->setState(Order::STATE_CONFIRMED);
//         $order->setPaymentIntentId($session->payment_intent);

//         if(empty($session->shipping_options)) {
//             $order->setMode('pickup');
//             $order->setShippingCost(0);
//         } else {
//             $address = new Address();
//             $address->setStreetName1($userAddress->getStreetName1());
//             $address->setStreetName2($userAddress->getStreetName2());
//             $address->setPostalCode($userAddress->getPostalCode());
//             $address->setCity($userAddress->getCity());
//             $address->setFirstName($userAddress->getFirstName());
//             $address->setLastName($userAddress->getLastName());
//             $address->setPhone($userAddress->getPhone());

//             $order->setAddress($address);
//             $order->setMode('shipping');
//             $order->setShippingCost($session->shipping_cost['amount_total'] / 100);
//         }

//         // Set order products.
//         foreach($session->line_items as $item) {
//             $product = $this->productRepository->find($item->price->product->metadata['product_id']);
//             if($product) {
//                 $orderProduct = $this->orderProductFactory->create($product, $order, $item->quantity);
//                 $order->addOrderProduct($orderProduct);
//             }
//         }

//         return $order;
//     }
// }

// c