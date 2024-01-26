<?php

namespace App\Service;

use Exception;

class Geo
{
    public static function getLatLong($address) 
    {
        try {
            $url = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($address) . "&key=AIzaSyAdDs1B7RFhPQoeDwih5Pii-Y3ouJJrLWM";

            $ch = curl_init($url);
    
            if ($ch === false) {
                throw new Exception('Failed to initialize curl');
            }
    
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    
            $response = curl_exec($ch);

            if ($response === false) {
                throw new Exception(curl_error($ch), curl_errno($ch));
            }
            } catch(Exception $e) {
                trigger_error(sprintf(
                'Curl failed with error #%d: %s',
                $e->getCode(), $e->getMessage()),
                E_USER_ERROR);
            } finally {
            // Close curl handle unless it failed to initialize
                if (is_resource($ch)) {
                    curl_close($ch);
                }

            $data = json_decode($response, true);
            
            if ($data['status'] == 'OK') {
                $lat = $data['results'][0]['geometry']['location']['lat'];
                $lng = $data['results'][0]['geometry']['location']['lng'];
                return [$lat, $lng];
            } else {
                return false;
            }
        }
    }

    public static function getAddressDistance($address1, $address2)
    {
        $coords1 = self::getLatLong($address1);
        $coords2 = self::getLatLong($address2);
        return self::haversineDistance($coords1, $coords2);
    }

    public static function haversineDistance($coords1, $coords2) 
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