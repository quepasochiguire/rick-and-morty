import { CharacterService } from 'src/application/services/character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import Character from 'src/domain/models/character/character.model';
declare class CreateCharacterUsecase {
    private readonly characterService;
    constructor(characterService: CharacterService);
    execute(characterData: CreateCharacterDto): Promise<Character>;
}
export default CreateCharacterUsecase;
