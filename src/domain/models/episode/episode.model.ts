import EpisodeStatus, { EpisodeStatusValue } from './episode-status.vo';
import { EpisodeProps } from './episode.props';

class Episode {
  private id: string;
  private name: string;
  private airDate: string;
  private episode: number;
  private characters: string[];
  private created: string;
  private season: number;
  private status: EpisodeStatus;

  constructor(props: EpisodeProps) {
    Object.assign(this, props);
    this.status = new EpisodeStatus(props.status);
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStatus(): EpisodeStatus {
    return this.status;
  }

  public getSesason(): number {
    return this.season;
  }

  public getEpisode(): number {
    return this.episode;
  }

  public cancel(): void {
    this.status = new EpisodeStatus(EpisodeStatusValue.Canceled);
  }

  public update(props: Partial<Omit<EpisodeProps, 'id'>>): void {
    Object.assign(this, props);
    if (props.status) this.status = new EpisodeStatus(props.status);
  }

  public static create(props: EpisodeProps): Episode {
    return new Episode(props);
  }

  public getSnapshot() {
    return {
      id: this.id,
      name: this.name,
      airDate: this.airDate,
      episode: this.episode,
      characters: this.characters,
      created: this.created,
      season: this.season,
      status: this.status.getValue(),
    };
  }
}

export default Episode;
