import { DataSource } from 'typeorm';
import { CharacterEntity } from './character.entity';
export declare const TYPEORM_CHARACTER_REPOSITORY = "TYPEORM_CHARACTER_REPOSITORY";
export declare const characterProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CharacterEntity>;
    inject: string[];
}[];
