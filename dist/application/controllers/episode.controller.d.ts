import { EpisodeService } from '../services/episode.service';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import GetEpisodesDto from '../usecases/episode/dto/get-episodes.dto';
import { CreateEpisodeDto } from '../usecases/episode/dto/create-episode.dto';
import { UpdateEpisodeDto } from '../usecases/episode/dto/update-episode.dto';
export declare class EpisodeController {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    getAllEpisodes(query: GetEpisodesDto & PaginationDto): Promise<{
        data: {
            id: string;
            name: string;
            airDate: string;
            episode: number;
            characters: string[];
            created: string;
            season: number;
            status: import("../../domain/models/episode/episode-status.vo").EpisodeStatusValue;
        }[];
        total: number;
        page: number;
        limit: number;
        next?: number;
        previous?: number;
    }>;
    createEpisode(episodeData: CreateEpisodeDto): Promise<{
        id: string;
        name: string;
        airDate: string;
        episode: number;
        characters: string[];
        created: string;
        season: number;
        status: import("../../domain/models/episode/episode-status.vo").EpisodeStatusValue;
    }>;
    cancelEpisode(episodeNumber: number, season: number): Promise<{
        success: boolean;
    }>;
    updateEpisode(episodeData: UpdateEpisodeDto, episodeNumber: number, season: number): Promise<{
        id: string;
        name: string;
        airDate: string;
        episode: number;
        characters: string[];
        created: string;
        season: number;
        status: import("../../domain/models/episode/episode-status.vo").EpisodeStatusValue;
    }>;
}
