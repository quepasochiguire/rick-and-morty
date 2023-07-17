import { CharacterAppearanceProps } from './chracter-appearance.props';
declare class CharacterAppearance {
    private id;
    private characterId;
    private start;
    private end;
    private episodeId;
    constructor(props: CharacterAppearanceProps);
    getId(): string;
    getCharacterId(): string;
    getStartMinute(): number;
    getEndMinute(): number;
    getStartSecond(): number;
    getEndSecond(): number;
    getStart(): string;
    getEnd(): string;
    getEpisodeId(): string;
    update(props: Partial<CharacterAppearanceProps>): void;
    static create(props: CharacterAppearanceProps): CharacterAppearance;
    getSnapshot(): CharacterAppearanceProps;
}
export default CharacterAppearance;
