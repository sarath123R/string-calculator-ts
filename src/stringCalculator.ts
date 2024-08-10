// Main function
export function add(numbers: string): number {
    if (numbers === '') return 0;
  
    const { delimiter, numberString } = extractDelimiterAndNumbers(numbers);
    const numArray = parseNumbers(numberString, delimiter);
  
    validateNoNegativeNumbers(numArray);
  
    return sumNumbers(numArray);
  }
  
  // Helper functions
  
  /**
   * Extracts the delimiter and number string from the input.
   * @param {string} numbers - The input string containing numbers.
   * @returns {Object} - An object containing the delimiter and the cleaned number string.
   */
  function extractDelimiterAndNumbers(numbers: string): { delimiter: RegExp, numberString: string } {
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterMatch = numbers.match(/^\/\/(.+?)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numberString = numbers.replace(/^\/\/.*\n/, '');
      }
    }
  
    return { delimiter, numberString };
  }
  
  /**
   * Parses the number string into an array of numbers based on the provided delimiter.
   * @param {string} numberString - The string containing numbers.
   * @param {RegExp} delimiter - The regular expression used to split the string.
   * @returns {number[]} - An array of numbers.
   */
  function parseNumbers(numberString: string, delimiter: RegExp): number[] {
    return numberString.split(delimiter).map(num => Number(num));
  }
  
  /**
   * Validates that no negative numbers are present in the array.
   * @param {number[]} numbers - An array of numbers to validate.
   * @throws {Error} - Throws an error if any negative numbers are found.
   */
  function validateNoNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }
  }
  
  /**
   * Sums the numbers in the array, ignoring numbers greater than 1000.
   * @param {number[]} numbers - An array of numbers.
   * @returns {number} - The sum of the valid numbers.
   */
  function sumNumbers(numbers: number[]): number {
    return numbers
      .filter(num => num <= 1000)
      .reduce((total, num) => total + num, 0);
  }
  