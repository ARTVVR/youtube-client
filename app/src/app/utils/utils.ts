import {
  LENGTH_VALUES_FOR_SLICE,
  MAX_THOUSAND_LENGTH,
  MAX_THOUSAND_MILLION,
} from '../constants/constants';

export default function reverseValue(value: string): string {
  return value.split('').reverse().join('');
}

export function setRoundValues(value: string): string {
  if (
    value.length >= MAX_THOUSAND_LENGTH &&
    value.length < MAX_THOUSAND_MILLION
  ) {
    return `${value.slice(0, value.length - LENGTH_VALUES_FOR_SLICE)}k`;
  }
  if (value.length >= MAX_THOUSAND_MILLION) {
    return `${value.slice(0, value.length - LENGTH_VALUES_FOR_SLICE * 2)}m`;
  }
  return value;
}
