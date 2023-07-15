import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EpisodeService } from '../services/episode.service';
import {
  PaginationDto,
  PaginationDtoTransformOptions,
} from 'src/domain/paginated/pagination.dto';
import GetEpisodesDto from '../usecases/episode/dto/get-episodes.dto';
import CreateEpisodeUsecase from '../usecases/episode/create-episode.usecase';
import { CreateEpisodeDto } from '../usecases/episode/dto/create-episode.dto';
import { UpdateEpisodeDto } from '../usecases/episode/dto/update-episode.dto';
import UpdateEpisodeUsecase from '../usecases/episode/update-episode.usecase';
import CancelEpisodeUsecase from '../usecases/episode/cancel-episode.usecase';

@Controller('/api/episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Get()
  async getAllEpisodes(
    @Query({ transform: PaginationDtoTransformOptions })
    query: GetEpisodesDto & PaginationDto,
  ) {
    const { season, page, limit } = query;
    const pagination = { page, limit };
    const filters = {};
    if (season) Object.assign(filters, { season });
    const episodes = await this.episodeService.getAll({
      pagination,
      season,
    });
    return {
      ...episodes.getSnapshot(),
      data: episodes.data.map((c) => c.getSnapshot()),
    };
  }

  @Post()
  async createEpisode(@Body() episodeData: CreateEpisodeDto) {
    const createEpisodeUsecase = new CreateEpisodeUsecase(this.episodeService);
    const episode = await createEpisodeUsecase.execute(episodeData);
    return episode.getSnapshot();
  }

  @Patch('/:episodeNumber/:season/cancel')
  async cancelEpisode(
    @Param('episodeNumber', ParseIntPipe) episodeNumber: number,
    @Param('season', ParseIntPipe) season: number,
  ) {
    const cancelEpisodeUsecase = new CancelEpisodeUsecase(this.episodeService);
    await cancelEpisodeUsecase.execute(episodeNumber, season);
    return { success: true };
  }

  @Patch('/:episodeNumber/:season')
  async updateEpisode(
    @Body() episodeData: UpdateEpisodeDto,
    @Param('episodeNumber', ParseIntPipe) episodeNumber: number,
    @Param('season', ParseIntPipe) season: number,
  ) {
    const updateEpisodeUsecase = new UpdateEpisodeUsecase(this.episodeService);
    const episode = await updateEpisodeUsecase.execute(
      episodeNumber,
      season,
      episodeData,
    );
    return episode.getSnapshot();
  }
}
