<?php

namespace App\Entity;

use App\Repository\ConfigRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConfigRepository::class)]
class Config
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $shopAddress = null;

    #[ORM\Column]
    private ?float $minShippingCost = null;

    #[ORM\Column]
    private ?float $maxShippingCost = null;

    #[ORM\Column]
    private ?float $shipCostStartIncrAt = null;

    #[ORM\Column]
    private ?float $maxShipCostReachAt = null;

    #[ORM\Column]
    private ?float $maxShippingDistance = null;

    #[ORM\Column]
    private ?float $freeShipMinCost = null;

    #[ORM\Column]
    private ?int $delivMinDaysApart = null;

    #[ORM\Column]
    private array $deliveryDays = [];

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    #[ORM\Column(length: 14)]
    private ?string $phone = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    #[ORM\Column(length: 20)]
    private ?string $mondaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $tuesdaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $wednesdaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $thursdaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $fridaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $saturdaySchedules = null;

    #[ORM\Column(length: 20)]
    private ?string $sundaySchedules = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShopAddress(): ?string
    {
        return $this->shopAddress;
    }

    public function setShopAddress(string $shopAddress): static
    {
        $this->shopAddress = $shopAddress;

        return $this;
    }

    public function getMinShippingCost(): ?float
    {
        return $this->minShippingCost;
    }

    public function setMinShippingCost(float $minShippingCost): static
    {
        $this->minShippingCost = $minShippingCost;

        return $this;
    }

    public function getMaxShippingCost(): ?float
    {
        return $this->maxShippingCost;
    }

    public function setMaxShippingCost(float $maxShippingCost): static
    {
        $this->maxShippingCost = $maxShippingCost;

        return $this;
    }

    public function getShipCostStartIncrAt(): ?float
    {
        return $this->shipCostStartIncrAt;
    }

    public function setShipCostStartIncrAt(float $shipCostStartIncrAt): static
    {
        $this->shipCostStartIncrAt = $shipCostStartIncrAt;

        return $this;
    }

    public function getMaxShipCostReachAt(): ?float
    {
        return $this->maxShipCostReachAt;
    }

    public function setMaxShipCostReachAt(float $maxShipCostReachAt): static
    {
        $this->maxShipCostReachAt = $maxShipCostReachAt;

        return $this;
    }

    public function getMaxShippingDistance(): ?float
    {
        return $this->maxShippingDistance;
    }

    public function setMaxShippingDistance(float $maxShippingDistance): static
    {
        $this->maxShippingDistance = $maxShippingDistance;

        return $this;
    }

    public function getFreeShipMinCost(): ?float
    {
        return $this->freeShipMinCost;
    }

    public function setFreeShipMinCost(float $freeShipMinCost): static
    {
        $this->freeShipMinCost = $freeShipMinCost;

        return $this;
    }

    public function getDelivMinDaysApart(): ?int
    {
        return $this->delivMinDaysApart;
    }

    public function setDelivMinDaysApart(int $delivMinDaysApart): static
    {
        $this->delivMinDaysApart = $delivMinDaysApart;

        return $this;
    }

    public function getDeliveryDays(): array
    {
        return $this->deliveryDays;
    }

    public function setDeliveryDays(array $deliveryDays): static
    {
        $this->deliveryDays = $deliveryDays;

        return $this;
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
    
    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getMondaySchedules(): ?string
    {
        return $this->mondaySchedules;
    }

    public function setMondaySchedules(string $mondaySchedules): static
    {
        $this->mondaySchedules = $mondaySchedules;

        return $this;
    }

    public function getTuesdaySchedules(): ?string
    {
        return $this->tuesdaySchedules;
    }

    public function setTuesdaySchedules(string $tuesdaySchedules): static
    {
        $this->tuesdaySchedules = $tuesdaySchedules;

        return $this;
    }

    public function getWednesdaySchedules(): ?string
    {
        return $this->wednesdaySchedules;
    }

    public function setWednesdaySchedules(string $wednesdaySchedules): static
    {
        $this->wednesdaySchedules = $wednesdaySchedules;

        return $this;
    }

    public function getThursdaySchedules(): ?string
    {
        return $this->thursdaySchedules;
    }

    public function setThursdaySchedules(string $thursdaySchedules): static
    {
        $this->thursdaySchedules = $thursdaySchedules;

        return $this;
    }

    public function getFridaySchedules(): ?string
    {
        return $this->fridaySchedules;
    }

    public function setFridaySchedules(string $fridaySchedules): static
    {
        $this->fridaySchedules = $fridaySchedules;

        return $this;
    }

    public function getSaturdaySchedules(): ?string
    {
        return $this->saturdaySchedules;
    }

    public function setSaturdaySchedules(string $saturdaySchedules): static
    {
        $this->saturdaySchedules = $saturdaySchedules;

        return $this;
    }

    public function getSundaySchedules(): ?string
    {
        return $this->sundaySchedules;
    }

    public function setSundaySchedules(string $sundaySchedules): static
    {
        $this->sundaySchedules = $sundaySchedules;

        return $this;
    }
}
