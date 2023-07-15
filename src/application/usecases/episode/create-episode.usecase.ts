import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EpisodeService } from 'src/application/services/episode.service';
import Episode from 'src/domain/models/episode/episode.model';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
class CreateEpisodeUsecase {
  constructor(
    @Inject()
    private readonly episodeService: EpisodeService,
  ) {}

  public async execute(episodeData: CreateEpisodeDto): Promise<Episode> {
    const episode = Episode.create({
      id: randomUUID(),
      ...episodeData,
    });
    await this.episodeService.save(episode);
    return episode;
  }
}

export default CreateEpisodeUsecase;
