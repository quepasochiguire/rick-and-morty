export declare enum CharacterGenderValue {
    Male = "Male",
    Female = "Female",
    Genderless = "Genderless",
    unknown = "unknown"
}
export declare const CHARACTER_GENDER: CharacterGenderValue[];
export default class CharacterGender {
    private readonly gender;
    constructor(gender: CharacterGenderValue);
    get value(): CharacterGenderValue;
}
