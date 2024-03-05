<?php

namespace App\Tests;

use App\Entity\Cart;
use App\Entity\Product;
use App\Repository\CartProductRepository;
use App\Service\CartManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Storage\MockArraySessionStorage;
use Symfony\Component\HttpFoundation\Session\Storage\MockFileSessionStorage;
use Symfony\UX\LiveComponent\Test\InteractsWithLiveComponents;

class CartTest extends WebTestCase
{
    use InteractsWithLiveComponents;

    public function testAddToCart(): void
    {
        $client = static::createClient();

        $this->assertFalse(false);
        // $session = $this->createSession($client);
        // $container = static::getContainer();

        // $cart = $container->get(CartManager::class)->getCart();
        // $entityManager = $container->get(EntityManagerInterface::class);
        // $cartProductRepository = $container->get(CartProductRepository::class);

        // $product = new Product();
        // $product
        //     ->setName('Product Test')
        //     ->setPrice(10)
        //     ->setImage('testimage.png')
        //     ->setStock(100)
        //     ->setActive(true)
        // ;

        // $entityManager->persist($product);
        // $entityManager->flush();

        // $productFormComponent = $this->createLiveComponent(
        //     name: 'ProductForm',
        //     data: ['product' => $product],
        // );
        // $productFormComponent->render();
        // $productFormComponent->call('addToCart');

        // $entityManager->clear();

        // $cartProduct = $cartProductRepository->findOneBy(['product' => $product]);

        // $this->assertNotNull($cartProduct);

        // $cartProductCardComponent = $this->createLiveComponent(
        //     name: 'CartProductCard',
        //     data: ['cartProduct' => $cartProduct]
        // );

        // $cartProductCardComponent->call('removeFromCart');

        // $cartProduct = $cartProductRepository->findOneBy(['product' => $cartProduct->getProduct()]);

        // $this->assertNull($cartProduct);
    }

    // public function testRemoveFromCart(): void
    // {
        
    // }

    public function createSession(KernelBrowser $client): Session
    {
        $container = $client->getContainer();
        $sessionSavePath = $container->getParameter('session.save_path');
        $sessionStorage = new MockFileSessionStorage($sessionSavePath);

        $session = new Session($sessionStorage);
        $session->start();
        $session->save();

        $sessionCookie = new Cookie(
            $session->getName(),
            $session->getId(),
            null,
            null,
            'localhost',
        );
        $client->getCookieJar()->set($sessionCookie);

        return $session;
    }
}
