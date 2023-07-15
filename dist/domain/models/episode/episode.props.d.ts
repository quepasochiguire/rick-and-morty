import { EpisodeStatusValue } from './episode-status.vo';
export interface EpisodeProps {
    id: string;
    name: string;
    airDate: string;
    episode: number;
    characters: string[];
    status: EpisodeStatusValue;
    created: string;
    season: number;
}
