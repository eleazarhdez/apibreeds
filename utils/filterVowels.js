const countVowels = require('./countVowels');

const filterVowels = (text, vowels) => {
  return vowels === 0 || isNaN(vowels) || countVowels(text) > vowels;
}

module.exports = filterVowels;