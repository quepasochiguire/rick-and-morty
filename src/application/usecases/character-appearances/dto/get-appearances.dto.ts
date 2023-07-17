import { IsOptional, IsUUID } from 'class-validator';

class GetAppearancesDto {
  @IsUUID()
  @IsOptional()
  episodeId?: string;
}

export default GetAppearancesDto;
