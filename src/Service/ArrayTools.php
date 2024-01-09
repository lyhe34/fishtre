<?php

class ArrayTools
{
    public static function find(array &$arr, string $property, mixed $value): mixed
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

    public static function remove(array &$arr, mixed $obj)
    {
        $index = array_search($obj, $arr);

        if ($index !== false) 
        {
            array_splice($arr, $index, 1);
        }
    }

    public static function removeBy(array &$arr, string $property, mixed $value)
    {
        $obj = self::find($arr, $property, $value);
        self::remove($arr, $obj);
    }
}