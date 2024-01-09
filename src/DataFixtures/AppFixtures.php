<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Fish;
use App\Entity\FishProduct;
use App\Factory\ProductFactory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $daurade = new Fish();
        $daurade->setName("Daurade");
        $daurade->setPricePerKilo(16);
        $daurade->setImage("daurade.png");
        $daurade->setFeatured(true);

        $loup = new Fish();
        $loup->setName("Loup");
        $loup->setPricePerKilo(12);
        $loup->setImage("loup.png");
        $loup->setFeatured(true);

        $muge = new Fish();
        $muge->setName("Muge");
        $muge->setPricePerKilo(25);
        $muge->setImage("muge.png");
        $muge->setFeatured(true);

        $eperlan = new Fish();
        $eperlan->setName("Eperlan");
        $eperlan->setPricePerKilo(12);
        $eperlan->setImage("eperlan.png");
        $eperlan->setFeatured(true);

        $anguille = new Fish();
        $anguille->setName("Anguille");
        $anguille->setPricePerKilo(36);
        $anguille->setImage("anguille.png");
        $anguille->setFeatured(true);
        
        $seiche = new Fish();
        $seiche->setName("Seiche");
        $seiche->setPricePerKilo(39);
        $seiche->setImage("seiche.png");

        $sole = new Fish();
        $sole->setName("Sole");
        $sole->setPricePerKilo(20);
        $sole->setImage("sole.png");

        $turbot = new Fish();
        $turbot->setName("Turbot");
        $turbot->setPricePerKilo(57);
        $turbot->setImage("turbot.png");

        $rougets = new Fish();
        $rougets->setName("Rougets");
        $rougets->setPricePerKilo(27);
        $rougets->setImage("rouget.png");

        $daurade1 = new FishProduct();
        
        $daurade1->setFish($daurade);
        $daurade1->setPieces(2);
        $daurade1->setWeight(0.5);

        $product1 = ProductFactory::create($daurade1);
        
        $daurade1->setProduct($product1);

        $daurade2 = new FishProduct();

        $daurade2->setFish($daurade);
        $daurade2->setPieces(4);
        $daurade2->setWeight(0.25);

        $product2 = ProductFactory::create($daurade2);

        $daurade2->setProduct($product2);

        $manager->persist($daurade);
        $manager->persist($loup);
        $manager->persist($muge);
        $manager->persist($eperlan);
        $manager->persist($anguille);
        $manager->persist($seiche);
        $manager->persist($sole);
        $manager->persist($turbot);
        $manager->persist($rougets);

        $manager->persist($daurade1);
        $manager->persist($daurade2);

        $manager->flush();
    }
}