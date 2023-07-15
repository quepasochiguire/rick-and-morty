export enum CharacterStatusValue {
  Alive = 'Alive',
  Suspend = 'Suspend',
  Dead = 'Dead',
}

export default class CharacterStatus {
  private readonly status: CharacterStatusValue;

  constructor(status: CharacterStatusValue) {
    this.status = status;
  }

  public get value(): CharacterStatusValue {
    return this.status;
  }
}
