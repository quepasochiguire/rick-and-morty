import Character from 'src/domain/models/character/character.model';
import CharacterProps from 'src/domain/models/character/character.props';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import { ICharacterService } from 'src/domain/services/character.service';
import { CharacterEntity } from 'src/infrastructure/repositories/character/typeorm/character.entity';
import { Repository } from 'typeorm';
export declare class CharacterService implements ICharacterService {
    private characterRepository;
    constructor(characterRepository: Repository<CharacterEntity>);
    getFilteredCharacters(filters: Partial<CharacterProps>): Promise<Character[]>;
    getCharacters(pagination?: PaginationDto, filters?: Partial<CharacterProps>): Promise<Paginated<Character>>;
    getCharacterById(id: string): Promise<Character | null>;
    save(character: Character): Promise<Character>;
    update(character: Character, validateIfCharacterExists?: boolean): Promise<Character>;
    suspend(id: string): Promise<Character>;
    findAll(): Promise<Character[]>;
    private validateIfCharacterExists;
}
