import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
export declare class CharacterAppearanceEntity {
    _id: string;
    id: string;
    characterId: string;
    episodeId: string;
    start: string;
    end: string;
    toDomain(): CharacterAppearance;
}
