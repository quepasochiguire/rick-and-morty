import { Inject, Injectable } from '@nestjs/common';
import { CharacterAppearanceService } from 'src/application/services/character-appearance.service';
import CharacterAppearance from 'src/domain/models/character-appearance/chracter-appearance.model';
import AddCharacterAppearanceDto from './dto/add-character-appearance.dto';
import { randomUUID } from 'crypto';

@Injectable()
class AddCharacterAppearanceUsecase {
  constructor(
    @Inject()
    private readonly characterAppearanceService: CharacterAppearanceService,
  ) {}

  public async execute(dto: AddCharacterAppearanceDto) {
    const appearance = CharacterAppearance.create({
      id: randomUUID(),
      ...dto,
    });
    await this.characterAppearanceService.save(appearance);
    return appearance;
  }
}

export default AddCharacterAppearanceUsecase;
