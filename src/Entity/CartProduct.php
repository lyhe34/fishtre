<?php

namespace App\Entity;

use App\Repository\CartProductRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation\Timestampable;

#[ORM\Entity(repositoryClass: CartProductRepository::class)]
class CartProduct
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $quantity = null;
    
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Timestampable(on: 'update')]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'cartProducts')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Cart $cart = null;

    #[ORM\ManyToOne(inversedBy: 'cartProducts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    public const MAX_QUANTITY = 10;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrice(): float
    {
        return $this->product->getPrice() * $this->quantity;
    }

    public function getPriceInCents(): float
    {
        return $this->product->getPriceInCents() * $this->quantity;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getCart(): ?Cart
    {
        return $this->cart;
    }

    public function setCart(?Cart $cart): static
    {
        $this->cart = $cart;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }
}

// #[ORM\Entity(repositoryClass: CartProductRepository::class)]
// class CartProduct
// {
//     #[ORM\Id]
//     #[ORM\GeneratedValue]
//     #[ORM\Column]
//     private ?int $id = null;

//     #[ORM\Column]
//     private ?int $quantity = null;
    
//     #[ORM\Column(type: Types::DATETIME_MUTABLE)]
//     #[Timestampable(on: 'update')]
//     private ?\DateTimeInterface $updatedAt = null;

//     #[ORM\ManyToOne(inversedBy: 'cartProducts')]
//     #[ORM\JoinColumn(nullable: true)]
//     private ?Cart $cart = null;

//     #[ORM\ManyToOne(inversedBy: 'cartProducts')]
//     #[ORM\JoinColumn(nullable: false)]
//     private ?Product $product = null;
// }

// class
