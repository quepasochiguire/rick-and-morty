import { IsOptional, IsUUID, Matches } from 'class-validator';
import {
  IsValidAppearanceTime,
  timeRegex,
} from './add-character-appearance.dto';

export default class UpdateCharacterAppearanceDto {
  @IsUUID()
  @IsOptional()
  public characterId: string;
  @IsUUID()
  @IsOptional()
  public episodeId: string;
  @Matches(timeRegex, { message: 'Start time must be in format HH:mm' })
  @IsValidAppearanceTime('start')
  @IsOptional()
  public start: string;
  @Matches(timeRegex, { message: 'End time must be in format HH:mm' })
  @IsValidAppearanceTime('end')
  @IsOptional()
  public end: string;
}
