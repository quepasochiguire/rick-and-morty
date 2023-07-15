"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHARACTER_GENDER = exports.CharacterGenderValue = void 0;
var CharacterGenderValue;
(function (CharacterGenderValue) {
    CharacterGenderValue["Male"] = "Male";
    CharacterGenderValue["Female"] = "Female";
    CharacterGenderValue["Genderless"] = "Genderless";
    CharacterGenderValue["unknown"] = "unknown";
})(CharacterGenderValue || (exports.CharacterGenderValue = CharacterGenderValue = {}));
exports.CHARACTER_GENDER = [
    CharacterGenderValue.Male,
    CharacterGenderValue.Female,
    CharacterGenderValue.Genderless,
    CharacterGenderValue.unknown,
];
class CharacterGender {
    constructor(gender) {
        this.gender = gender;
    }
    get value() {
        return this.gender;
    }
}
exports.default = CharacterGender;
//# sourceMappingURL=character-gender.vo.js.map