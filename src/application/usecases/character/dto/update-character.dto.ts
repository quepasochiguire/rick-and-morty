import { IsIn, IsOptional, IsString, IsUrl } from 'class-validator';
import {
  CHARACTER_GENDER,
  CharacterGenderValue,
} from 'src/domain/models/character/character-gender.vo';
import { CharacterStatusValue } from 'src/domain/models/character/character-status.vo';

export class UpdateCharacterDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsIn([
    CharacterStatusValue.Alive,
    CharacterStatusValue.Dead,
    CharacterStatusValue.Suspend,
  ])
  status: CharacterStatusValue;

  @IsOptional()
  @IsString()
  species: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsUrl()
  image: string;

  @IsOptional()
  @IsString()
  @IsIn(CHARACTER_GENDER)
  gender: CharacterGenderValue;
}
