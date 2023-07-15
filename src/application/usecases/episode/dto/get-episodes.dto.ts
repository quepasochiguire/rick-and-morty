import { IsInt, IsNumber, IsPositive } from 'class-validator';

export default class GetEpisodesDto {
  @IsNumber()
  @IsPositive()
  @IsInt()
  public season: number;
}
