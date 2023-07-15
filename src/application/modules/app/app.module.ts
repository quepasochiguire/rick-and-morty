import { Module } from '@nestjs/common';
import { CharacterModule } from '../character/character.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { EpisodeModule } from '../episode/episode.module';
import { CharacterAppearanceModule } from '../character-appearance/character-appearance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CharacterModule,
    EpisodeModule,
    CharacterAppearanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
