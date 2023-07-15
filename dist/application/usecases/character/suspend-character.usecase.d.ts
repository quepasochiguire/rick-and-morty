import { CharacterService } from 'src/application/services/character.service';
declare class SuspendCharacterUsecase {
    private readonly characterService;
    constructor(characterService: CharacterService);
    execute(characterId: string): Promise<void>;
}
export default SuspendCharacterUsecase;
