import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';
import Episode from 'src/domain/models/episode/episode.model';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'episodes' })
export class EpisodeEntity {
  @ObjectIdColumn()
  _id: string;
  @Column()
  id: string;
  @Column()
  name: string;
  @Column()
  airDate: string;
  @Column()
  episode: number;
  @Column()
  characters: string[];
  @Column()
  season: number;
  @Column()
  created: string;
  @Column()
  status: EpisodeStatusValue;

  public toDomain(): Episode {
    return new Episode({
      id: this.id,
      name: this.name,
      characters: this.characters,
      airDate: this.airDate,
      episode: this.episode,
      created: this.created,
      season: this.season,
      status: this.status,
    });
  }
}
