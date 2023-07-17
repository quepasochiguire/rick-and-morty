import { ValidationOptions } from 'class-validator';
export declare const timeRegex: RegExp;
export default class AddCharacterAppearanceDto {
    characterId: string;
    episodeId: string;
    start: string;
    end: string;
}
export declare function IsValidAppearanceTime(property: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
