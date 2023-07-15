import { Controller } from '@nestjs/common';
import { CharacterAppearanceService } from '../services/character-appearance.service';

@Controller('/api/character-appareances')
export class CharacterAppareancesController {
  constructor(private readonly characterService: CharacterAppearanceService) {}



}
