import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import ICharacterAppearanceService from 'src/domain/services/character-appearance.service';
import { CharacterAppearanceEntity } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.entity';
import { Repository } from 'typeorm';
export declare class CharacterAppearanceService implements ICharacterAppearanceService {
    private characterAppearanceRepo;
    constructor(characterAppearanceRepo: Repository<CharacterAppearanceEntity>);
    get(id: string): Promise<CharacterAppearance>;
    private getAllCharacterAppearances;
    getCharacterAppearances(pagination: PaginationDto, characterId: string, episodeId?: string): Promise<Paginated<CharacterAppearance>>;
    save(characterAppearance: CharacterAppearance): Promise<void>;
    update(characterAppearance: CharacterAppearance): Promise<void>;
    delete(characterAppearance: CharacterAppearance): Promise<void>;
    private validateIfPreviousAppearanceOverlaps;
    private overlaps;
}
