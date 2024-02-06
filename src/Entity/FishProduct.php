<?php

namespace App\Entity;

use App\Repository\FishProductRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FishProductRepository::class)]
#[ORM\HasLifecycleCallbacks]
class FishProduct extends Product
{
    #[ORM\Column]
    private ?int $pieces = null;

    #[ORM\Column]
    private ?float $weight = null;

    #[ORM\ManyToOne(inversedBy: 'fishProducts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Fish $fish = null;

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

    public function getFish(): ?Fish
    {
        return $this->fish;
    }

    public function setFish(?Fish $fish): static
    {
        $this->fish = $fish;

        return $this;
    }

    #[ORM\PreUpdate]
    public function updatePrice()
    {
        $this->setPrice(($this->weight * $this->pieces) * $this->fish->getPricePerKilo());
    }

    #[ORM\PreUpdate]
    public function updateName()
    {
        $this->setName($this->fish->getName() . ' - ' . $this->getShortName());
    }
    
    public function getShortName(): string
    {
        $pieces = $this->pieces > 0 ? "pièces" : "pièce";
        $isKilo = $this->weight >= 1; 
        $weight = $this->weight;

        if($isKilo) {
            $unit = $this->weight >= 2 ? "kilogrammes" : "kilogramme";
        } else {
            $unit = "grammes";
            $weight *= 1000;
        }

        return $this->pieces . " " . $pieces . " de " . $weight . " " . $unit;
    }
}
