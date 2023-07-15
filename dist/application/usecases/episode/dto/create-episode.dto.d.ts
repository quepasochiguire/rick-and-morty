import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';
export declare class CreateEpisodeDto {
    name: string;
    airDate: string;
    episode: number;
    characters: string[];
    status: EpisodeStatusValue;
    created: string;
    season: number;
}
