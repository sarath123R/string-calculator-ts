export function add(numbers: string): number {
    if (numbers === '') return 0;
  
    const { delimiter, numberString } = parseDelimiter(numbers);
    const numArray = splitNumbers(numberString, delimiter);
  
    validateNumbers(numArray);
  
    return sumValidNumbers(numArray);
  }
  
  // Helper functions
  
  function parseDelimiter(numbers: string): { delimiter: RegExp, numberString: string } {
    let delimiter = /,|\n/; // default delimiter
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.*?)\n/);
      if (match) {
        delimiter = new RegExp(match[1]);
        numberString = numbers.replace(/^\/\/.*\n/, '');
      }
    }
  
    return { delimiter, numberString };
  }
  
  function splitNumbers(numberString: string, delimiter: RegExp): number[] {
    return numberString.split(delimiter).map(Number);
  }
  
  function validateNumbers(numbers: number[]): void {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
  }
  
  function sumValidNumbers(numbers: number[]): number {
    return numbers
      .filter(num => num <= 1000)
      .reduce((sum, num) => sum + num, 0);
  }
  