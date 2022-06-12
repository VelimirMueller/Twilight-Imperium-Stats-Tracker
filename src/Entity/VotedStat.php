<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VotedStatRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=VotedStatRepository::class)
 */
class VotedStat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $sessionsPlayed;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $averageScore;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $longestWinningStreak;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $mostPlayedFaction;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $tyrant;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $hero;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSessionsPlayed(): ?int
    {
        return $this->sessionsPlayed;
    }

    public function setSessionsPlayed(?int $sessionsPlayed): self
    {
        $this->sessionsPlayed = $sessionsPlayed;

        return $this;
    }

    public function getAverageScore(): ?float
    {
        return $this->averageScore;
    }

    public function setAverageScore(?float $averageScore): self
    {
        $this->averageScore = $averageScore;

        return $this;
    }

    public function getLongestWinningStreak(): ?int
    {
        return $this->longestWinningStreak;
    }

    public function setLongestWinningStreak(?int $longestWinningStreak): self
    {
        $this->longestWinningStreak = $longestWinningStreak;

        return $this;
    }

    public function getMostPlayedFaction(): ?string
    {
        return $this->mostPlayedFaction;
    }

    public function setMostPlayedFaction(?string $mostPlayedFaction): self
    {
        $this->mostPlayedFaction = $mostPlayedFaction;

        return $this;
    }

    public function getTyrant(): ?int
    {
        return $this->tyrant;
    }

    public function setTyrant(?int $tyrant): self
    {
        $this->tyrant = $tyrant;

        return $this;
    }

    public function getHero(): ?int
    {
        return $this->hero;
    }

    public function setHero(?int $hero): self
    {
        $this->hero = $hero;

        return $this;
    }
}
