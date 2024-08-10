import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
  test('returns the sum of numbers in a comma-separated string', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
