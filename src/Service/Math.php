<?php

namespace App\Service;

class Math
{
    public function boundedLerp(
        float $minValue, 
        float $maxValue, 
        float $minBound, 
        float $maxBound, 
        float $input,
    ): float
    {
        if ($input >= $maxBound) {
            return $maxValue;
        } elseif ($input <= $minBound) {
            return $minValue;
        } else {
            return $minValue + (($input - $minBound) / ($maxBound - $minBound)) * ($maxValue - $minValue);
        }
    }

    public function haversineDistance(array $coords1, array $coords2): float
    {
        $earthRadius = 6371;
    
        $lat1 = deg2rad($coords1[0]);
        $lng1 = deg2rad($coords1[1]);
        $lat2 = deg2rad($coords2[0]);
        $lng2 = deg2rad($coords2[1]);
    
        $dlat = $lat2 - $lat1;
        $dlng = $lng2 - $lng1;
    
        $a = sin($dlat/2) * sin($dlat/2) + cos($lat1) * cos($lat2) * sin($dlng/2) * sin($dlng/2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));
    
        $distance = $earthRadius * $c;
    
        return round($distance, 2);
    }
}