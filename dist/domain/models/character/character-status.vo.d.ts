export declare enum CharacterStatusValue {
    Alive = "Alive",
    Suspend = "Suspend",
    Dead = "Dead"
}
export default class CharacterStatus {
    private readonly status;
    constructor(status: CharacterStatusValue);
    get value(): CharacterStatusValue;
}
