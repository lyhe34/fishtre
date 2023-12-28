<?php

namespace App\Service;

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
}