import Character from '../models/character/character.model';
import CharacterProps from '../models/character/character.props';
import Paginated from '../paginated/paginated.model';
import { PaginationDto } from '../paginated/pagination.dto';
export interface ICharacterService {
    getCharacters(pagination?: PaginationDto, filters?: Partial<CharacterProps>): Promise<Paginated<Character>>;
    getCharacterById(id: string): Promise<Character | null>;
    getFilteredCharacters(filters: Partial<CharacterProps>): Promise<Character[]>;
    save(character: Character): Promise<Character>;
    update(character: Character): Promise<Character>;
    suspend(id: string): Promise<Character>;
}
