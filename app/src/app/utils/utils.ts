import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  LENGTH_VALUES_FOR_SLICE,
  MAX_THOUSAND_LENGTH,
  MAX_THOUSAND_MILLION,
  MINIMAL_NAME_LENGTH,
  MINIMAL_PASSWORD_LENGTH,
} from '../constants/constants';

export default function reverseValue(value: string): string {
  return value.split('').reverse().join('');
}

export function setRoundValues(value: string): string {
  if (
    value?.length >= MAX_THOUSAND_LENGTH &&
    value?.length < MAX_THOUSAND_MILLION
  ) {
    return `${value.slice(0, value.length - LENGTH_VALUES_FOR_SLICE)}k`;
  }
  if (value?.length >= MAX_THOUSAND_MILLION) {
    return `${value.slice(0, value.length - LENGTH_VALUES_FOR_SLICE * 2)}m`;
  }
  return value;
}

export function patternValidator(
  regex: RegExp,
  error: ValidationErrors
): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return null;
    }
    const valid = regex.test(control.value);

    return valid ? null : error;
  };
}

export function setFormGroup(): FormGroup {
  return new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_NAME_LENGTH),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_NAME_LENGTH),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_PASSWORD_LENGTH),
      patternValidator(/\d/, { hasNumber: true }),
      patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      patternValidator(/[a-z]/, { hasSmallCase: true }),
      patternValidator(/[ `~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
        hasSpecialCharacters: true,
      }),
    ]),
  });
}
