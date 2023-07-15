import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import ICharacterAppearanceService from 'src/domain/services/character-appearance.service';
import { CharacterAppearanceEntity } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.entity';
import { Repository } from 'typeorm';
export declare class CharacterAppearanceService implements ICharacterAppearanceService {
    private episodeRepository;
    constructor(episodeRepository: Repository<CharacterAppearanceEntity>);
    getCharacterAppearances(characterId: string): Promise<CharacterAppearance[]>;
    save(characterAppearance: CharacterAppearance): Promise<void>;
    update(characterAppearance: CharacterAppearance): Promise<void>;
    delete(characterAppearance: CharacterAppearance): Promise<void>;
    private validateIfPreviousAppearanceOverlaps;
    private overlaps;
}
