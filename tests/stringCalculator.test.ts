import { add } from '../src/stringCalculator';

describe('String Calculator', () => {
  test('returns the sum of numbers in a comma-separated string', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('handles new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('handles different delimiters', () => {
    expect(add('//;\n1;2;3')).toBe(6);
  });

  test('throws an error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negatives not allowed: -2');
  });
});
