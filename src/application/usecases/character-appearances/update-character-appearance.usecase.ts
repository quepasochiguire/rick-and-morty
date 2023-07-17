import { Inject, Injectable } from '@nestjs/common';
import { CharacterAppearanceService } from 'src/application/services/character-appearance.service';
import UpdateCharacterAppearanceDto from './dto/update-character-appearance.dto';

@Injectable()
class UpdateCharacterAppearanceUsecase {
  constructor(
    @Inject()
    private readonly characterAppearanceService: CharacterAppearanceService,
  ) {}

  public async execute(id: string, dto: UpdateCharacterAppearanceDto) {
    const appearance = await this.characterAppearanceService.get(id);
    appearance.update(dto);
    await this.characterAppearanceService.update(appearance);
    return appearance;
  }
}

export default UpdateCharacterAppearanceUsecase;
