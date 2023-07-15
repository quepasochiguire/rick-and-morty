import CharacterAppearance from '../models/character-appearance/chracter-appearance.model';
export default interface ICharacterAppearanceService {
    getCharacterAppearances(characterId: string): Promise<CharacterAppearance[]>;
    save(characterAppearance: CharacterAppearance): Promise<void>;
    update(characterAppearance: CharacterAppearance): Promise<void>;
    delete(characterAppearance: CharacterAppearance): Promise<void>;
}
