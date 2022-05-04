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
  MAX_DESCRIPTION_LENGTH,
  MAX_THOUSAND_LENGTH,
  MAX_THOUSAND_MILLION,
  MAX_TITLE_LENGTH,
  MINIMAL_NAME_LENGTH,
  MINIMAL_PASSWORD_LENGTH,
  MINIMAL_TITLE_LENGTH,
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
  const emailRegex = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}';
  return new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_NAME_LENGTH),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_NAME_LENGTH),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(emailRegex),
    ]),
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

export function setCardsFormGroup(): FormGroup {
  return new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(MINIMAL_TITLE_LENGTH),
      Validators.maxLength(MAX_TITLE_LENGTH),
    ]),
    description: new FormControl(
      '',
      Validators.maxLength(MAX_DESCRIPTION_LENGTH)
    ),
    imgUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/),
    ]),
    videoUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/
      ),
    ]),
  });
}
