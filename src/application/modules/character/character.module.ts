import { Module } from '@nestjs/common';
import { CharacterController } from 'src/application/controllers/character.controller';
import { CharacterService } from 'src/application/services/character.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { characterProviders } from 'src/infrastructure/repositories/character/typeorm/character.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...characterProviders, CharacterService],
  controllers: [CharacterController],
})
export class CharacterModule {}
