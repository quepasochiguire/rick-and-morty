export enum EpisodeStatusValue {
  Planned = 'Planned',
  Released = 'Released',
  Canceled = 'Canceled',
}

class EpisodeStatus {
  private value: EpisodeStatusValue;

  constructor(value: EpisodeStatusValue) {
    this.value = value;
  }

  public getValue(): EpisodeStatusValue {
    return this.value;
  }
}

export default EpisodeStatus;
