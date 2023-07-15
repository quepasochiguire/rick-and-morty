import { DataSource } from 'typeorm';
import { CharacterEntity } from './character.entity';
import { DATA_SOURCE } from 'src/infrastructure/database/database.provider';

export const TYPEORM_CHARACTER_REPOSITORY = 'TYPEORM_CHARACTER_REPOSITORY';

export const characterProviders = [
  {
    provide: TYPEORM_CHARACTER_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CharacterEntity),
    inject: [DATA_SOURCE],
  },
];
