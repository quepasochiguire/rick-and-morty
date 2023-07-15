import CharacterGender from './character-gender.vo';
import CharacterStatus, { CharacterStatusValue } from './character-status.vo';
import CharacterProps from './character.props';

class Character {
  private id: string;
  private name: string;
  private status: CharacterStatus;
  private species: string;
  private type: string;
  private gender: CharacterGender;
  private episode: string[];
  private image: string;

  constructor(props: CharacterProps) {
    Object.assign(this, props);
    this.status = new CharacterStatus(props.status);
    this.gender = new CharacterGender(props.gender);
  }

  public update(props: Partial<Omit<CharacterProps, 'id'>>): void {
    Object.assign(this, props);
    if (props.status) this.status = new CharacterStatus(props.status);
    if (props.gender) this.gender = new CharacterGender(props.gender);
  }

  public getEpisodes(): string[] {
    return this.episode;
  }

  public getType(): string {
    return this.type;
  }

  public getSpecies(): string {
    return this.species;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public isAlive(): boolean {
    return this.status.value === CharacterStatusValue.Alive;
  }

  public suspend(): void {
    this.status = new CharacterStatus(CharacterStatusValue.Suspend);
  }

  public kill(): void {
    this.status = new CharacterStatus(CharacterStatusValue.Dead);
  }

  public revive(): void {
    this.status = new CharacterStatus(CharacterStatusValue.Alive);
  }

  public getStatus(): CharacterStatus {
    return this.status;
  }

  public static create(props: CharacterProps): Character {
    return new Character(props);
  }

  public getSnapshot() {
    return {
      id: this.id,
      name: this.name,
      status: this.status.value,
      species: this.species,
      type: this.type,
      gender: this.gender.value,
      episode: this.episode,
      image: this.image,
    };
  }
}

export default Character;
