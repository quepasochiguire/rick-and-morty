import { Inject, Injectable } from '@nestjs/common';
import { EpisodeService } from 'src/application/services/episode.service';

@Injectable()
class CancelEpisodeUsecase {
  constructor(
    @Inject()
    private readonly episodeService: EpisodeService,
  ) {}

  public async execute(episodeNumber: number, season: number): Promise<void> {
    const episode = await this.episodeService.getEpisode(episodeNumber, season);
    episode.cancel();
    await this.episodeService.suspend(episode);
  }
}

export default CancelEpisodeUsecase;
