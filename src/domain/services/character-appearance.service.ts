import CharacterAppearance from '../models/character-appearance/chracter-appearance.model';
import Paginated from '../paginated/paginated.model';
import { PaginationDto } from '../paginated/pagination.dto';

export default interface ICharacterAppearanceService {
  getCharacterAppearances(
    pagination: PaginationDto,
    characterId: string,
    episodeId?: string,
  ): Promise<Paginated<CharacterAppearance>>;
  get(id: string): Promise<CharacterAppearance>;
  save(characterAppearance: CharacterAppearance): Promise<void>;
  update(characterAppearance: CharacterAppearance): Promise<void>;
  delete(characterAppearance: CharacterAppearance): Promise<void>;
}
