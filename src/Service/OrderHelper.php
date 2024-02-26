<?php

namespace App\Service;

use DateTime;
use DateTimeInterface;

class OrderHelper
{
    private array $days = [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Saturday',
        7 => 'Sunday',
    ];
      
    public function __construct(
        private ConfigManager $configManager,
    ) {
    }

    public function getOrderDeliveryDate(DateTimeInterface $orderDate): DateTimeInterface
    {
        $config = $this->configManager->getConfig();
        $delivMinDaysApart = $config->getDelivMinDaysApart();
        $deliveryDays = $config->getDeliveryDays();

        $deliveryDate = DateTime::createFromInterface($orderDate);

        $d = $delivMinDaysApart > 1 ? ' days' : ' day';
        $deliveryDate->modify('+' . strval($delivMinDaysApart) . $d);
        
        $deliveryDateDayIndex = $deliveryDate->format('N');

        foreach($config->getDeliveryDays() as $deliveryDay) {
            if($deliveryDateDayIndex < $deliveryDay) {
                $deliveryDate->modify('next ' . $this->days[$deliveryDay]);
                return $deliveryDate;
            } else if($deliveryDateDayIndex == $deliveryDay) {
                return $deliveryDate;
            }
        }

        $deliveryDate->modify('next ' . $this->days[$deliveryDays[0]]);
        return $deliveryDate;
    }
}