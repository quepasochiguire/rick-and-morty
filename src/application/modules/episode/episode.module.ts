import { Module } from '@nestjs/common';
import { EpisodeController } from 'src/application/controllers/episode.controller';
import { EpisodeService } from 'src/application/services/episode.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { episodeProviders } from 'src/infrastructure/repositories/episodes/episode.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...episodeProviders, EpisodeService],
  controllers: [EpisodeController],
})
export class EpisodeModule {}
