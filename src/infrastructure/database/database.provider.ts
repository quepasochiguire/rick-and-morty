import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { CharacterEntity } from '../repositories/character/typeorm/character.entity';
import { EpisodeEntity } from '../repositories/episodes/episode.entity';
import { CharacterAppearanceEntity } from '../repositories/chracter-appearance/chracter-appearance.entity';

export const DATA_SOURCE = 'DATA_SOURCE';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: configService.get<string>('MONGO_URL'),
        entities: [CharacterEntity, EpisodeEntity, CharacterAppearanceEntity],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
