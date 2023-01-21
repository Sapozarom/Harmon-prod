<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Entity use to hande User data in DB
 */
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Event::class)]
    private Collection $events;



    #[ORM\OneToMany(mappedBy: 'createdBy', targetEntity: Game::class)]
    private Collection $createdGames;

    #[ORM\ManyToMany(targetEntity: Game::class, mappedBy: 'players')]
    private Collection $games;

    #[ORM\ManyToMany(targetEntity: Game::class, mappedBy: 'inactivePlayers')]
    private Collection $gamesWhereInactive;

    #[ORM\ManyToMany(targetEntity: Day::class, mappedBy: 'voted')]
    private Collection $votedDays;

    public function __construct()
    {
        $this->events = new ArrayCollection();
        $this->createdGames = new ArrayCollection();
        $this->games = new ArrayCollection();
        $this->gamesWhereInactive = new ArrayCollection();
        $this->votedDays = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {

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
            $event->setUser($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): self
    {
        if ($this->events->removeElement($event)) {
            // set the owning side to null (unless already changed)
            if ($event->getUser() === $this) {
                $event->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Game>
     */
    public function getCreatedGames(): Collection
    {
        return $this->createdGames;
    }

    public function addCreatedGame(Game $createdGame): self
    {
        if (!$this->createdGames->contains($createdGame)) {
            $this->createdGames->add($createdGame);
            $createdGame->setCreatedBy($this);
        }

        return $this;
    }

    public function removeCreatedGame(Game $createdGame): self
    {
        if ($this->createdGames->removeElement($createdGame)) {
            // set the owning side to null (unless already changed)
            if ($createdGame->getCreatedBy() === $this) {
                $createdGame->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Game>
     */
    public function getGames(): Collection
    {
        return $this->games;
    }

    public function addGame(Game $game): self
    {
        if (!$this->games->contains($game)) {
            $this->games->add($game);
            $game->addPlayer($this);
        }

        return $this;
    }

    public function removeGame(Game $game): self
    {
        if ($this->games->removeElement($game)) {
            $game->removePlayer($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Game>
     */
    public function getGamesWhereInactive(): Collection
    {
        return $this->gamesWhereInactive;
    }

    public function addGamesWhereInactive(Game $gamesWhereInactive): self
    {
        if (!$this->gamesWhereInactive->contains($gamesWhereInactive)) {
            $this->gamesWhereInactive->add($gamesWhereInactive);
            $gamesWhereInactive->addInactivePlayer($this);
        }

        return $this;
    }

    public function removeGamesWhereInactive(Game $gamesWhereInactive): self
    {
        if ($this->gamesWhereInactive->removeElement($gamesWhereInactive)) {
            $gamesWhereInactive->removeInactivePlayer($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Day>
     */
    public function getVotedDays(): Collection
    {
        return $this->votedDays;
    }

    public function addVotedDay(Day $votedDay): self
    {
        if (!$this->votedDays->contains($votedDay)) {
            $this->votedDays->add($votedDay);
            $votedDay->addVoted($this);
        }

        return $this;
    }

    public function removeVotedDay(Day $votedDay): self
    {
        if ($this->votedDays->removeElement($votedDay)) {
            $votedDay->removeVoted($this);
        }

        return $this;
    }
}
