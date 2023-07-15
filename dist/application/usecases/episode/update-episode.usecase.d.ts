import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { EpisodeService } from 'src/application/services/episode.service';
import Episode from 'src/domain/models/episode/episode.model';
declare class UpdateEpisodeUsecase {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    execute(episodeNumber: number, season: number, episodeData: UpdateEpisodeDto): Promise<Episode>;
}
export default UpdateEpisodeUsecase;
