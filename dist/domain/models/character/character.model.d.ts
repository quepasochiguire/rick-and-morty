import CharacterStatus, { CharacterStatusValue } from './character-status.vo';
import CharacterProps from './character.props';
declare class Character {
    private id;
    private name;
    private status;
    private species;
    private type;
    private gender;
    private episode;
    private image;
    constructor(props: CharacterProps);
    update(props: Partial<Omit<CharacterProps, 'id'>>): void;
    getEpisodes(): string[];
    getType(): string;
    getSpecies(): string;
    getId(): string;
    getName(): string;
    isAlive(): boolean;
    suspend(): void;
    kill(): void;
    revive(): void;
    getStatus(): CharacterStatus;
    static create(props: CharacterProps): Character;
    getSnapshot(): {
        id: string;
        name: string;
        status: CharacterStatusValue;
        species: string;
        type: string;
        gender: import("./character-gender.vo").CharacterGenderValue;
        episode: string[];
        image: string;
    };
}
export default Character;
