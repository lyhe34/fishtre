<?php

namespace App\Tests;

use App\Service\Geo;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class GeoTest extends KernelTestCase
{
    public function testAddressDistance(): void
    {
        $kernel = self::bootKernel();

        $container = static::getContainer();
        $geo = $container->get(Geo::class);

        $address1 = "Port de plaisance, 34250 Palavas-les-Flots";
        $address2 = "4657 Rue de la Jeune Parque, 34070 Montpellier";

        $distance = $geo->getAddressDistance($address1, $address2);

        $this->assertEquals(8.37, $distance);
    }
}



