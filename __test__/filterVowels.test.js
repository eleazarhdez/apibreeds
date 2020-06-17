const filterVowels = require('../utils/filterVowels');

describe('Test for filterVowels', () => {
  test('Check filter with one breed and more than 2 vowels', () => {
    expect(filterVowels("chihuahua", 2)).toBeTruthy();
  });

  test('Check filter with one breed and a wrong vowel', () => {
    expect(filterVowels("chihuahua", "wrong")).toBeTruthy();
  });

  test('Check filter with one breed and a greater number of vowels', () => {
    expect(filterVowels("chow", 3)).toBeFalsy();
  });
}); 