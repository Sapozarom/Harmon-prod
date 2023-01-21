<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * Entity use to hande Game data in DB
 */
#[ORM\Entity(repositoryClass: GameRepository::class)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: Event::class, orphanRemoval:'true')]
    private Collection $events;


    #[ORM\ManyToOne(inversedBy: 'createdGames')]
    private ?User $createdBy = null;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'games')]
    private Collection $players;

    #[ORM\Column(nullable: true)]
    private ?int $minSessionLength = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 16)]
    private ?string $slug = null;

    #[ORM\Column]
    private ?bool $locked = null;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'gamesWhereInactive')]
    #[ORM\JoinTable(name: "inactive_table")]
    private Collection $inactivePlayers;

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: Day::class , orphanRemoval:'true')]
    private Collection $days;

    public function __construct()
    {
        $this->events = new ArrayCollection();
        $this->players = new ArrayCollection();
        $this->inactivePlayers = new ArrayCollection();
        $this->days = new ArrayCollection();
        
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Event>
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }

    public function addEvent(Event $event): self
    {
        if (!$this->events->contains($event)) {
            $this->events->add($event);
            $event->setGame($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): self
    {
        if ($this->events->removeElement($event)) {
            // set the owning side to null (unless already changed)
            if ($event->getGame() === $this) {
                $event->setGame(null);
            }
        }

        return $this;
    }

   
    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(User $player): self
    {
        if (!$this->players->contains($player)) {
            $this->players->add($player);
        }

        return $this;
    }

    public function removePlayer(User $player): self
    {
        $this->players->removeElement($player);

        return $this;
    }

    public function getMinSessionLength(): ?int
    {
        return $this->minSessionLength;
    }

    public function setMinSessionLength(?int $minSessionLength): self
    {
        $this->minSessionLength = $minSessionLength;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function isLocked(): ?bool
    {
        return $this->locked;
    }

    public function setLocked(bool $locked): self
    {
        $this->locked = $locked;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getInactivePlayers(): Collection
    {
        return $this->inactivePlayers;
    }

    public function addInactivePlayer(User $inactivePlayer): self
    {
        if (!$this->inactivePlayers->contains($inactivePlayer)) {
            $this->inactivePlayers->add($inactivePlayer);
        }

        return $this;
    }

    public function removeInactivePlayer(User $inactivePlayer): self
    {
        $this->inactivePlayers->removeElement($inactivePlayer);

        return $this;
    }

    /**
     * @return Collection<int, Day>
     */
    public function getDays(): Collection
    {
        return $this->days;
    }

    public function addDay(Day $day): self
    {
        if (!$this->days->contains($day)) {
            $this->days->add($day);
            $day->setGame($this);
        }

        return $this;
    }

    public function removeDay(Day $day): self
    {
        if ($this->days->removeElement($day)) {
            // set the owning side to null (unless already changed)
            if ($day->getGame() === $this) {
                $day->setGame(null);
            }
        }

        return $this;
    }

}
