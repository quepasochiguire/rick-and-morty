import { EpisodeService } from 'src/application/services/episode.service';
import Episode from 'src/domain/models/episode/episode.model';
import { CreateEpisodeDto } from './dto/create-episode.dto';
declare class CreateEpisodeUsecase {
    private readonly episodeService;
    constructor(episodeService: EpisodeService);
    execute(episodeData: CreateEpisodeDto): Promise<Episode>;
}
export default CreateEpisodeUsecase;
