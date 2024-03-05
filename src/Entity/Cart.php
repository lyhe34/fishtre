<?php

namespace App\Entity;

use App\Repository\CartRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation\Timestampable;

#[ORM\Entity(repositoryClass: CartRepository::class)]
class Cart
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    #[Timestampable(on: 'update')]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToOne(mappedBy: 'cart')]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'cart', targetEntity: CartProduct::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $cartProducts;

    public function __construct()
    {
        $this->cartProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): static
    {
        // set the owning side of the relation if necessary
        if ($user->getCart() !== $this) {
            $user->setCart($this);
        }

        $this->user = $user;

        return $this;
    }
    
    /**
     * @return Collection<int, CartProduct>
     */
    public function getCartProducts(): Collection
    {
        return $this->cartProducts;
    }

    public function addCartProduct(CartProduct $cartProduct): static
    {
        if (!$this->cartProducts->contains($cartProduct)) {
            $this->cartProducts->add($cartProduct);
            $cartProduct->setCart($this);
        }

        return $this;
    }

    public function removeCartProduct(CartProduct $cartProduct): static
    {
        if ($this->cartProducts->removeElement($cartProduct)) {
            // set the owning side to null (unless already changed)
            if ($cartProduct->getCart() === $this) {
                $cartProduct->setCart(null);
            }
        }

        return $this;
    }

    public function setCartProducts(Collection $cartProducts)
    {
        foreach($cartProducts->getValues() as $cartProduct) {
            $this->addCartProduct($cartProduct);
        }
    }

    public function getPrice(): float
    {
        $total = 0;

        foreach($this->cartProducts as $cartProduct) {
            $total += $cartProduct->getPrice();
        }

        return $total;
    }

    public function getProductsQuantity(): int
    {
        $count = 0;

        foreach($this->cartProducts as $cartProduct) {
            $count += $cartProduct->getQuantity();
        }

        return $count;
    }

    public function clear()
    {
        foreach($this->getCartProducts() as $cartProduct) {
            $this->removeCartProduct($cartProduct);
        }
    }
}