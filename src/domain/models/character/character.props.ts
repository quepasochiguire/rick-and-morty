import { CharacterGenderValue } from './character-gender.vo';
import { CharacterStatusValue } from './character-status.vo';

export default interface CharacterProps {
  id: string;
  name: string;
  status: CharacterStatusValue;
  species: string;
  type: string;
  gender: CharacterGenderValue;
  image: string;
  episode?: string[];
}
