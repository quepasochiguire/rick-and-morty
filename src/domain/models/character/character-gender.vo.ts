export enum CharacterGenderValue {
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  unknown = 'unknown',
}

export const CHARACTER_GENDER = [
  CharacterGenderValue.Male,
  CharacterGenderValue.Female,
  CharacterGenderValue.Genderless,
  CharacterGenderValue.unknown,
];

export default class CharacterGender {
  private readonly gender: CharacterGenderValue;
  constructor(gender: CharacterGenderValue) {
    this.gender = gender;
  }

  public get value(): CharacterGenderValue {
    return this.gender;
  }
}
