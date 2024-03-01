<?php

namespace App\Service;

use Exception;

class Geo
{
    public function __construct(
        private Math $math,
    ) {

    }

    public function getAddressData($address): array
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

            return json_decode($response, true);
        }
    }

    public function getLatLong($address): array
    {
        $data = $this->getAddressData($address);
        
        if ($data['status'] == 'OK') {
            $lat = $data['results'][0]['geometry']['location']['lat'];
            $lng = $data['results'][0]['geometry']['location']['lng'];
            return [$lat, $lng];
        }
    }

    public function getAddressDistance($address1, $address2): float
    {
        $coords1 = $this->getLatLong($address1);
        $coords2 = $this->getLatLong($address2);
        
        if(null === $coords1 || null === $coords2) {
            return null;
        }

        return $this->math->haversineDistance($coords1, $coords2);
    }
}