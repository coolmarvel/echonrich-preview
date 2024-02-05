import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsYYYYMMDD(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isYYYYMMDD',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be in yyyyMMdd format`;
        },
      },
    });
  };
}
