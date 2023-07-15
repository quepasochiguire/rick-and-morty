import { IsOptional, IsString } from 'class-validator';

export class GetCharactersDto {
  @IsOptional()
  @IsString()
  species: string;

  @IsOptional()
  @IsString()
  type: string;
}
