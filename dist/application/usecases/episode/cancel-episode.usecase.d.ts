import { EpisodeService } from 'src/application/services/episode.service';
declare class CancelEpisodeUsecase {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    execute(episodeNumber: number, season: number): Promise<void>;
}
export default CancelEpisodeUsecase;
