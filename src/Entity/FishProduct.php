<?php

namespace App\Entity;

use App\Repository\FishProductRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FishProductRepository::class)]
class FishProduct
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $pieces = null;

    #[ORM\Column]
    private ?float $weight = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\ManyToOne(inversedBy: 'fishProducts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Fish $fish = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Product $product = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPieces(): ?int
    {
        return $this->pieces;
    }

    public function setPieces(int $pieces): static
    {
        $this->pieces = $pieces;

        return $this;
    }

    public function getWeight(): ?float
    {
        return $this->weight;
    }

    public function setWeight(float $weight): static
    {
        $this->weight = $weight;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getFish(): ?Fish
    {
        return $this->fish;
    }

    public function setFish(?Fish $fish): static
    {
        $this->fish = $fish;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(Product $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getPrice(): float
    {
        return ($this->weight * $this->pieces) * $this->fish->getPricePerKilo();
    }

    public function getName(): string
    {
        $pieces = $this->pieces > 0 ? "pièces" : "pièce";
        $isKilo = $this->weight >= 1; 
        $weight = $this->weight;

        if($isKilo)
        {
            $unit = $this->weight >= 2 ? "kilogrammes" : "kilogramme";
        }
        else
        {
            $unit = "grammes";
            $weight *= 1000;
        }
        
        return $this->pieces . " " . $pieces . " de " . $weight . " " . $unit; 
    }

    
    public function getFullName(): string
    {
        return $this->fish->getName() . " - " . $this->getName();;
    }
}
