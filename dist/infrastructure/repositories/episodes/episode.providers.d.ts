import { DataSource } from 'typeorm';
import { EpisodeEntity } from './episode.entity';
export declare const TYPEORM_EPISODE_REPOSITORY = "TYPEORM_EPISODE_REPOSITORY";
export declare const episodeProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<EpisodeEntity>;
    inject: string[];
}[];
