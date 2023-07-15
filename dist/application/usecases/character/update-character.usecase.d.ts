import { CharacterService } from 'src/application/services/character.service';
import Character from 'src/domain/models/character/character.model';
import { UpdateCharacterDto } from './dto/update-character.dto';
declare class UpdateCharacterUsecase {
    private readonly characterService;
    constructor(characterService: CharacterService);
    execute(characterId: string, characterData: UpdateCharacterDto): Promise<Character>;
}
export default UpdateCharacterUsecase;
