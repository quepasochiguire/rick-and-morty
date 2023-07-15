import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';

export class UpdateEpisodeDto {
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  airDate: string;
  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsOptional()
  episode: number;
  @IsOptional()
  characters: string[];
  @IsOptional()
  @IsIn(Object.values(EpisodeStatusValue))
  status: EpisodeStatusValue;
  @IsOptional()
  @IsString()
  created: string;
  @IsNumber()
  @IsInt()
  @IsOptional()
  season: number;
}
