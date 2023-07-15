import { DataSource } from 'typeorm';
import { CharacterAppearanceEntity } from './chracter-appearance.entity';
export declare const TYPEORM_CHARACTER_APPEARANCE_REPOSITORY = "TYPEORM_CHARACTER_APPEARANCE_REPOSITORY";
export declare const characterAppearanceProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CharacterAppearanceEntity>;
    inject: string[];
}[];
