import { CharacterGenderValue } from 'src/domain/models/character/character-gender.vo';
import { CharacterStatusValue } from 'src/domain/models/character/character-status.vo';
export declare class CreateCharacterDto {
    name: string;
    status: CharacterStatusValue;
    species: string;
    type: string;
    image: string;
    gender: CharacterGenderValue;
}
