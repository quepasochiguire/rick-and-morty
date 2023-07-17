import {
  IsUUID,
  Matches,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export const timeRegex = /^[0-9]{2}:[0-9]{2}$/;

export default class AddCharacterAppearanceDto {
  @IsUUID()
  public characterId: string;
  @IsUUID()
  public episodeId: string;
  @Matches(timeRegex, { message: 'Start time must be in format HH:mm' })
  @IsValidAppearanceTime('start')
  public start: string;
  @Matches(timeRegex, { message: 'End time must be in format HH:mm' })
  @IsValidAppearanceTime('end')
  public end: string;
}

export function IsValidAppearanceTime(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidAppearanceTime',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any) {
          let [minute, second] = value.split(':');
          minute = parseInt(minute);
          second = parseInt(second);
          return minute > 0 && minute < 60 && second > 0 && second < 60;
        },
      },
    });
  };
}
