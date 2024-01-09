<?php

namespace App\Service;

use Doctrine\Common\Collections\Collection;
use ReflectionClass;

class Utilities
{
    /**
     * @param string $string
     * @return string
    */
    public static function cleanInput(string $string)
    {
        return htmlspecialchars(strip_tags(trim($string)));
    }

    public static function arrayFind(array $arr, string $property, $value)
    {
        $accessor = 'get' . ucfirst($property);

        foreach ($arr as $obj) 
        {
            $v = call_user_func([$obj, $accessor]);
           
            if ($v === $value) 
            {
                return $obj;
            }
        }

        return null;
    }

    public static function arrayRemove(array $arr, $obj): array
    {
        $index = array_search($obj ,$arr);

        if ($index !== false) 
        {
            unset($arr[$index]);
        }

        return $arr;
    }

    public static function arrayRemoveBy($arr, $property, $value): array
    {
        $obj = self::arrayFind($arr, $property, $value);
        return self::arrayRemove($arr, $obj);
    }

    public static function getTotalPrice(Collection $products): float
    {
        $totalPrice = 0;

        foreach($products->getValues() as $product)
        {
            $totalPrice += $product->getPrice();
        }

        return $totalPrice;
    }
}