<?php

namespace App\Service;

use App\Service\Math;

class Shipping
{
    public function __construct(
        private Math $math,
        private Geo $geo,
        private ConfigManager $configManager,
    ) {

    }

    public function calculateCost($distance): float
    {
        $config = $this->configManager->getConfig();
        $adjustDistance = $distance - $config->getShipCostStartIncrAt();
        $adjustMaxDistance = $config->getMaxShipCostReachAt() - $config->getShipCostStartIncrAt();
        $t = $adjustDistance / $adjustMaxDistance;
        return $this->math->lerp($config->getMinShippingCost(), $config->getMaxShippingCost(), $t);
    }

    public function getAddressDistance($address)
    {
        return $this->geo->getAddressDistance($address, $this->configManager->getConfig()->getShopAddress());
    }

    public function isDistanceAllowed($distance)
    {
        return $distance <= $this->configManager->getConfig()->getMaxShippingDistance();
    }
}