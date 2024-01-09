<?php

namespace App\Entity;

use App\Repository\FishRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FishRepository::class)]
class Fish
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?float $pricePerKilo = null;

    #[ORM\Column(length: 255)]
    private ?string $image = null;

    #[ORM\Column]
    private ?bool $active = true;

    #[ORM\Column]
    private ?bool $featured = false;

    #[ORM\OneToMany(mappedBy: 'fish', targetEntity: FishProduct::class, orphanRemoval: true)]
    private Collection $fishProducts;

    public function __construct()
    {
        $this->fishProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPricePerKilo(): ?float
    {
        return $this->pricePerKilo;
    }

    public function setPricePerKilo(float $pricePerKilo): static
    {
        $this->pricePerKilo = $pricePerKilo;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function isFeatured(): ?bool
    {
        return $this->featured;
    }

    public function setFeatured(bool $featured): static
    {
        $this->featured = $featured;

        return $this;
    }

    /**
     * @return Collection<int, FishProduct>
     */
    public function getFishProducts(): Collection
    {
        return $this->fishProducts;
    }

    public function addFishProduct(FishProduct $fishProduct): static
    {
        if (!$this->fishProducts->contains($fishProduct)) {
            $this->fishProducts->add($fishProduct);
            $fishProduct->setFish($this);
        }

        return $this;
    }

    public function removeFishProduct(FishProduct $fishProduct): static
    {
        if ($this->fishProducts->removeElement($fishProduct)) {
            // set the owning side to null (unless already changed)
            if ($fishProduct->getFish() === $this) {
                $fishProduct->setFish(null);
            }
        }

        return $this;
    }
}
