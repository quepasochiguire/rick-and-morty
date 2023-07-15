import { Inject, Injectable } from '@nestjs/common';
import { CharacterService } from 'src/application/services/character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import Character from 'src/domain/models/character/character.model';
import { randomUUID } from 'crypto';

@Injectable()
class CreateCharacterUsecase {
  constructor(
    @Inject()
    private readonly characterService: CharacterService,
  ) {}

  public async execute(characterData: CreateCharacterDto): Promise<Character> {
    const character = Character.create({
      id: randomUUID(),
      ...characterData,
    });
    await this.characterService.save(character);
    return character;
  }
}

export default CreateCharacterUsecase;
