import { DataSource } from 'typeorm';
import { DATA_SOURCE } from 'src/infrastructure/database/database.provider';
import { CharacterAppearanceEntity } from './chracter-appearance.entity';

export const TYPEORM_CHARACTER_APPEARANCE_REPOSITORY =
  'TYPEORM_CHARACTER_APPEARANCE_REPOSITORY';

export const characterAppearanceProviders = [
  {
    provide: TYPEORM_CHARACTER_APPEARANCE_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CharacterAppearanceEntity),
    inject: [DATA_SOURCE],
  },
];
