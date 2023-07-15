import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import Episode from 'src/domain/models/episode/episode.model';
import Paginated from 'src/domain/paginated/paginated.model';
import { PaginationDto } from 'src/domain/paginated/pagination.dto';
import { IEpisodeService } from 'src/domain/services/episode.service';
import { EpisodeEntity } from 'src/infrastructure/repositories/episodes/episode.entity';
import { TYPEORM_EPISODE_REPOSITORY } from 'src/infrastructure/repositories/episodes/episode.providers';
import { Repository } from 'typeorm';

@Injectable()
export class EpisodeService implements IEpisodeService {
  constructor(
    @Inject(TYPEORM_EPISODE_REPOSITORY)
    private episodeRepository: Repository<EpisodeEntity>,
  ) {}

  async getBySeason(season: number): Promise<Episode[]> {
    const episodes = await this.episodeRepository.find({ where: { season } });
    return episodes.map((e) => e.toDomain());
  }

  /**
   * @TODO Implement pagination using cleaner code (Ex: Decorators)
   */
  async getAll({
    season,
    pagination,
  }: {
    season?: number;
    pagination: PaginationDto;
  }): Promise<Paginated<Episode>> {
    const { page, limit } = pagination;
    const total = await this.episodeRepository.count();
    const episodes = await this.episodeRepository.find({
      where: season ? { season } : {},
      take: limit,
      skip: (page - 1) * limit,
    });
    return new Paginated<Episode>({
      data: episodes.map((c) => c.toDomain()),
      total,
      limit,
      page,
      next: page * limit < total ? page + 1 : null,
      previous: page > 1 ? page - 1 : null,
    });
  }
  async update(episode: Episode): Promise<void> {
    await this.validateIfEpisodeExists(episode);
    await this.episodeRepository.update(
      { id: episode.getId() },
      episode.getSnapshot(),
    );
  }

  async save(episode: Episode): Promise<void> {
    await this.validateIfEpisodeExists(episode);
    const episodeEntity = this.episodeRepository.create(episode.getSnapshot());
    await this.episodeRepository.save(episodeEntity);
  }

  async getEpisode(episodeNumber: number, season: number): Promise<Episode> {
    const episode = await this.episodeRepository.findOne({
      where: { episode: episodeNumber, season },
    });
    return episode.toDomain();
  }

  async suspend(episode: Episode): Promise<void> {
    episode.cancel();
    await this.episodeRepository.update(
      { id: episode.getId() },
      episode.getSnapshot(),
    );
  }

  async validateIfEpisodeExists(episode: Episode): Promise<void> {
    const episodeExists = await this.episodeRepository.findOne({
      where: {
        season: episode.getSesason(),
        name: episode.getName(),
        episode: episode.getEpisode(),
      },
    });
    if (episodeExists) throw new BadRequestException('Episode already exists');
  }
}
