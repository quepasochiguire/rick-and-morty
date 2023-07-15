import { CharacterGenderValue } from 'src/domain/models/character/character-gender.vo';
import { CharacterStatusValue } from 'src/domain/models/character/character-status.vo';
import Character from 'src/domain/models/character/character.model';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'characters' })
export class CharacterEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  species: string;

  @Column()
  gender: string;

  @Column()
  image: string;

  public toDomain(): Character {
    return new Character({
      id: this.id,
      name: this.name,
      status: this.status as CharacterStatusValue,
      type: this.type,
      species: this.species,
      gender: this.gender as CharacterGenderValue,
      image: this.image,
      episode: [],
    });
  }
}
