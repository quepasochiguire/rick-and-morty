import { IsIn, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import {
  CHARACTER_GENDER,
  CharacterGenderValue,
} from 'src/domain/models/character/character-gender.vo';
import { CharacterStatusValue } from 'src/domain/models/character/character-status.vo';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsIn([
    CharacterStatusValue.Alive,
    CharacterStatusValue.Dead,
    CharacterStatusValue.Suspend,
  ])
  status: CharacterStatusValue;

  @IsNotEmpty()
  @IsString()
  species: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(CHARACTER_GENDER)
  gender: CharacterGenderValue;
}
