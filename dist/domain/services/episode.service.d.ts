import Episode from '../models/episode/episode.model';
import Paginated from '../paginated/paginated.model';
import { PaginationDto } from '../paginated/pagination.dto';
export interface IEpisodeService {
    getBySeason(season: number): Promise<Episode[]>;
    getAll({ season, pagination, }: {
        season?: number;
        pagination: PaginationDto;
    }): Promise<Paginated<Episode>>;
    update(episode: Episode): Promise<void>;
    save(episode: Episode): Promise<void>;
    getEpisode(episodeNumber: number, season: number): Promise<Episode>;
    suspend(episode: Episode): Promise<void>;
}
