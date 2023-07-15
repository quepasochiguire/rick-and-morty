import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';
import Episode from 'src/domain/models/episode/episode.model';
export declare class EpisodeEntity {
    _id: string;
    id: string;
    name: string;
    airDate: string;
    episode: number;
    characters: string[];
    season: number;
    created: string;
    status: EpisodeStatusValue;
    toDomain(): Episode;
}
