<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\ORM\Mapping as ORM;
use Stringable;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address implements Stringable
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $streetName1 = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $streetName2 = null;

    #[ORM\Column(length: 5)]
    private ?string $postalCode = null;

    #[ORM\Column(length: 50)]
    private ?string $city = null;

    #[ORM\Column(length: 50)]
    private ?string $firstName = null;

    #[ORM\Column(length: 50)]
    private ?string $lastName = null;

    #[ORM\Column(length: 14)]
    private ?string $phone = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreetName1(): ?string
    {
        return $this->streetName1;
    }

    public function setStreetName1(string $streetName1): static
    {
        $this->streetName1 = $streetName1;

        return $this;
    }

    public function getStreetName2(): ?string
    {
        return $this->streetName2;
    }

    public function setStreetName2(?string $streetName2): static
    {
        $this->streetName2 = $streetName2;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): static
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): static
    {
        $this->city = $city;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

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

    public function __toString(): string
    {
        return $this->streetName1 . ' ' . $this->postalCode . ' ' . $this->city;
    }
}
