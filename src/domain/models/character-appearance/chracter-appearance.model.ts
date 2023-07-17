import { CharacterAppearanceProps } from './chracter-appearance.props';

class CharacterAppearance {
  private id: string;
  private characterId: string;
  private start: string;
  private end: string;
  private episodeId: string;

  constructor(props: CharacterAppearanceProps) {
    Object.assign(this, props);
  }

  public getId(): string {
    return this.id;
  }

  public getCharacterId(): string {
    return this.characterId;
  }

  public getStartMinute(): number {
    return Number(this.start.split(':')[0]);
  }

  public getEndMinute(): number {
    return Number(this.end.split(':')[0]);
  }

  public getStartSecond(): number {
    return Number(this.start.split(':')[1]);
  }

  public getEndSecond(): number {
    return Number(this.end.split(':')[1]);
  }

  public getStart(): string {
    return this.start;
  }

  public getEnd(): string {
    return this.end;
  }

  public getEpisodeId(): string {
    return this.episodeId;
  }

  public update(props: Partial<CharacterAppearanceProps>): void {
    Object.assign(this, props);
  }

  public static create(props: CharacterAppearanceProps): CharacterAppearance {
    return new CharacterAppearance(props);
  }

  public getSnapshot(): CharacterAppearanceProps {
    return {
      id: this.id,
      characterId: this.characterId,
      start: this.start,
      end: this.end,
      episodeId: this.episodeId,
    };
  }
}

export default CharacterAppearance;
