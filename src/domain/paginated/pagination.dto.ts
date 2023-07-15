import { Type } from 'class-transformer';
import { IsOptional, IsPositive, IsInt } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @IsInt()
  public readonly page: number;

  @IsPositive()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public readonly limit: number;
}

export const PaginationDtoTransformOptions = (query: any) => {
  const { page, limit, ...rest } = query;
  return {
    ...rest,
    page: page ? parseInt(page) : 1,
    limit: limit ? parseInt(limit) : 5,
    season: rest.season ? parseInt(rest.season) : undefined,
  };
};
