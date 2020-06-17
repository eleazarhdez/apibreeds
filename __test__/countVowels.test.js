const countVowels = require('../utils/countVowels');

describe('Test for countVowels', () => {
  test('Check how many vowels have a word', () => {
    expect(countVowels("chow")).toBe(1);
  });

  test('Check how many vowels have a empty breed', () => {
    expect(countVowels("")).toBe(0);
  });
}); 