import { DataSource } from 'typeorm';
import { EpisodeEntity } from './episode.entity';
import { DATA_SOURCE } from 'src/infrastructure/database/database.provider';

export const TYPEORM_EPISODE_REPOSITORY = 'TYPEORM_EPISODE_REPOSITORY';

export const episodeProviders = [
  {
    provide: TYPEORM_EPISODE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EpisodeEntity),
    inject: [DATA_SOURCE],
  },
];
