import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as moment from 'moment';

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

    // Check for time format
    const timeFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    const isValid = moment(value, timeFormat, true).isValid();

    return isValid;
  }

  defaultMessage() {
    return "Invalid UTC date format. Expecting the following format: 'YYYY-MM-DDTHH:mm:ssZ'";
  }
}
