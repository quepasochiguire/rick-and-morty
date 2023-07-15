import { Inject, Injectable } from '@nestjs/common';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { EpisodeService } from 'src/application/services/episode.service';
import Episode from 'src/domain/models/episode/episode.model';

@Injectable()
class UpdateEpisodeUsecase {
  constructor(
    @Inject()
    private readonly episodeService: EpisodeService,
  ) {}

  public async execute(
    episodeNumber: number,
    season: number,
    episodeData: UpdateEpisodeDto,
  ): Promise<Episode> {
    const episode = await this.episodeService.getEpisode(episodeNumber, season);
    episode.update(episodeData);
    await this.episodeService.update(episode);
    return episode;
  }
}

export default UpdateEpisodeUsecase;
