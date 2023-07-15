import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'characters-appearances' })
export class CharacterAppearanceEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  id: string;

  @Column()
  characterId: string;

  @Column()
  episodeId: string;

  @Column()
  start: string;

  @Column()
  end: string;

  public toDomain(): CharacterAppearance {
    return new CharacterAppearance({
      id: this.id,
      characterId: this.characterId,
      episodeId: this.episodeId,
      start: this.start,
      end: this.end,
    });
  }
}
