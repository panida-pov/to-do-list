import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customUtcDate', async: true })
export class CustomUtcDateValidator implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value !== 'string') {
      return false;
    }

    // Check if the string ends with 'Z' to indicate UTC time
    if (!value.endsWith('Z')) {
      return false;
    }

    try {
      const dateParsed = new Date(Date.parse(value));
      if (dateParsed.toISOString() == value) {
        return false;
      }
    } catch {
      return false;
    }

    return true; // Validation passed
  }

  defaultMessage() {
    return 'Invalid UTC date format';
  }
}
