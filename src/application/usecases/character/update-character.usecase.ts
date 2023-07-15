import { Inject, Injectable } from '@nestjs/common';
import { CharacterService } from 'src/application/services/character.service';
import Character from 'src/domain/models/character/character.model';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
class UpdateCharacterUsecase {
  constructor(
    @Inject()
    private readonly characterService: CharacterService,
  ) {}

  public async execute(
    characterId: string,
    characterData: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.characterService.getCharacterById(characterId);
    character.update(characterData);
    await this.characterService.update(character);
    return character;
  }
}

export default UpdateCharacterUsecase;
