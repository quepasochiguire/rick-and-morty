import { Inject, Injectable } from '@nestjs/common';
import { CharacterService } from 'src/application/services/character.service';

@Injectable()
class SuspendCharacterUsecase {
  constructor(
    @Inject()
    private readonly characterService: CharacterService,
  ) {}

  public async execute(characterId: string): Promise<void> {
    const character = await this.characterService.getCharacterById(characterId);
    character.suspend();
    await this.characterService.update(character);
  }
}

export default SuspendCharacterUsecase;
