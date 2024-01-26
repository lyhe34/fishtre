<?php

namespace App\Service;

class Math
{
    public function lerp($min, $max, $t)
    {
        if($t <= 0) {
            return $min;
        }
        if($t >= 1) {
            return $max;
        }

        $diff = $max - $min;
        $val = $diff * $t;
        
        return $min + $val;
    }
}