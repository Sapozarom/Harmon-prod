<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


/**
 * Entity use to hande Event data in DB
 */
#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $start = null;

    #[ORM\Column(nullable: true)]
    private ?int $finish = null;

    #[ORM\ManyToOne(inversedBy: 'events')]
    private ?User $user = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'events')]
    private ?Game $game = null;

    #[ORM\Column(nullable: true)]
    private ?bool $vote = null;

    #[ORM\Column(nullable: true)]
    private ?int $maxLength = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $startTime = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $finishTime = null;

    #[ORM\ManyToOne(inversedBy: 'votes')]
    private ?Day $day = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStart(): ?int
    {
        return $this->start;
    }

    public function setStart(?int $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getFinish(): ?int
    {
        return $this->finish;
    }

    public function setFinish(?int $finish): self
    {
        $this->finish = $finish;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function isVote(): ?bool
    {
        return $this->vote;
    }

    public function setVote(?bool $vote): self
    {
        $this->vote = $vote;

        return $this;
    }

    public function getMaxLength(): ?int
    {
        return $this->maxLength;
    }

    public function setMaxLength(?int $maxLength): self
    {
        $this->maxLength = $maxLength;

        return $this;
    }

    public function createRangeString()
    {
        $start = $this->start;
        $finish = $this->finish;

        $range = $start . '-'. $finish;
        
        $startHour = intdiv($start, 60);
        $startMin = $start % 60;

        if ($startMin < 10) {
            $startMin = "00";
        }

        $finishHour = intdiv($finish, 60);
        $finishMin = $finish % 60;

        if ($finishMin < 10) {
            $finishMin = '00';
        }

        $range = $startHour . ':' . $startMin . '-' . $finishHour . ':' . $finishMin;

        return $range;
    }

    public function getStartTime(): ?\DateTimeInterface
    {
        return $this->startTime;
    }

    public function setStartTime(?\DateTimeInterface $startTime): self
    {
        $this->startTime = $startTime;

        return $this;
    }

    public function getFinishTime(): ?\DateTimeInterface
    {
        return $this->finishTime;
    }

    public function setFinishTime(?\DateTimeInterface $finishTime): self
    {
        $this->finishTime = $finishTime;

        return $this;
    }

    public function getDay(): ?Day
    {
        return $this->day;
    }

    public function setDay(?Day $day): self
    {
        $this->day = $day;

        return $this;
    }
}
