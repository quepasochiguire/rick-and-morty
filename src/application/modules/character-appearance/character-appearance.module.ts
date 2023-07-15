import { Module } from '@nestjs/common';
import { CharacterAppareancesController } from 'src/application/controllers/character-appareance.controller';
import { CharacterAppearanceService } from 'src/application/services/character-appearance.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { characterAppearanceProviders } from 'src/infrastructure/repositories/chracter-appearance/chracter-appearance.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...characterAppearanceProviders, CharacterAppearanceService],
  controllers: [CharacterAppareancesController],
})
export class CharacterAppearanceModule {}
