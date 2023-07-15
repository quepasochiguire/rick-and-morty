import Episode from 'src/domain/models/episode/episode.model';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import { IEpisodeService } from 'src/domain/services/episode.service';
import { EpisodeEntity } from 'src/infrastructure/repositories/episodes/episode.entity';
import { Repository } from 'typeorm';
export declare class EpisodeService implements IEpisodeService {
    private episodeRepository;
    constructor(episodeRepository: Repository<EpisodeEntity>);
    getBySeason(season: number): Promise<Episode[]>;
    getAll({ season, pagination, }: {
        season?: number;
        pagination: PaginationDto;
    }): Promise<Paginated<Episode>>;
    update(episode: Episode): Promise<void>;
    save(episode: Episode): Promise<void>;
    getEpisode(episodeNumber: number, season: number): Promise<Episode>;
    suspend(episode: Episode): Promise<void>;
    validateIfEpisodeExists(episode: Episode): Promise<void>;
}
