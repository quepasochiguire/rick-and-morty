import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { EpisodeStatusValue } from 'src/domain/models/episode/episode-status.vo';

export class CreateEpisodeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  airDate: string;
  @IsNumber()
  @IsPositive()
  @IsInt()
  episode: number;
  @IsOptional()
  characters: string[];
  @IsIn(Object.values(EpisodeStatusValue))
  status: EpisodeStatusValue;
  @IsString()
  created: string;
  @IsNumber()
  @IsInt()
  season: number;
}
