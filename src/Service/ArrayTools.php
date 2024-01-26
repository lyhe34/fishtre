<?php

namespace App\Service;

use Exception;

class ArrayTools
{
    public static function find(array &$arr, string $property, mixed $value): mixed
    {
        $accessor = 'get' . ucfirst($property);

        foreach ($arr as $obj) {
            if(!method_exists($obj, $accessor)) {
                $index = array_search($obj, $arr);
                $type = gettype($obj);
                throw new Exception("Could not find property accessor : $accessor on object at index $index of type $type");
            }

            $v = call_user_func([$obj, $accessor]);
           
            if ($v === $value) {
                return $obj;
            }
        }

        return null;
    }

    public static function remove(array &$arr, mixed $obj)
    {
        $index = array_search($obj, $arr);

        if ($index !== false) {
            array_splice($arr, $index, 1);
        }
    }

    public static function removeBy(array &$arr, string $property, mixed $value)
    {
        try {
            $obj = self::find($arr, $property, $value);
            self::remove($arr, $obj);
        }
        catch(Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}