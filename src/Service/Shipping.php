<?php

namespace App\Service;

use App\Entity\Address;
use App\Service\Math;

class Shipping
{
    public function __construct(
        private Math $math,
        private Geo $geo,
        private ConfigManager $configManager,
    ) {

    }

    public function calculateShippingCost(float $cartPrice, Address|string $address): float
    {
        $freeShipMinCost = $this->configManager->getConfig()->getFreeShipMinCost();

        if($cartPrice >= $freeShipMinCost) {
            return 0;
        }

        $shippingCost = $this->calculateAddressCost($address);

        return $shippingCost;
    }

    public function calculateDistanceCost(float $distance): float
    {
        $config = $this->configManager->getConfig();
        $adjustDistance = $distance - $config->getShipCostStartIncrAt();
        $adjustMaxDistance = $config->getMaxShipCostReachAt() - $config->getShipCostStartIncrAt();
        $t = $adjustDistance / $adjustMaxDistance;
        return $this->math->lerp($config->getMinShippingCost(), $config->getMaxShippingCost(), $t);
    }

    public function calculateAddressCost(Address|string $address): float
    {
        $distance = $this->getAddressDistance($address);
        return $this->calculateDistanceCost($distance);
    }

    public function getAddressDistance(Address|string $address): float
    {
        return $this->geo->getAddressDistance($address, $this->configManager->getConfig()->getShopAddress());
    }

    public function isAddressAllowed(Address|string $address): bool
    {
        $distance = $this->getAddressDistance($address);
        return $this->isDistanceAllowed($distance);
    }

    public function isDistanceAllowed(float $distance): bool
    {
        return $distance <= $this->configManager->getConfig()->getMaxShippingDistance();
    }
}