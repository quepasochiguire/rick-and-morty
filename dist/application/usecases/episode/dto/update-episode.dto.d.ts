import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';
export declare class UpdateEpisodeDto {
    name: string;
    airDate: string;
    episode: number;
    characters: string[];
    status: EpisodeStatusValue;
    created: string;
    season: number;
}
