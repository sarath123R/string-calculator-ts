export function add(numbers: string): number {
    if (numbers === '') return 0;
    return numbers
      .split(',')
      .map(Number)
      .reduce((acc, num) => acc + num, 0);
  }
  