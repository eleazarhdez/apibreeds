const countVowels = require('./countVowels');

const filterVowels = (text, vowels) => {
  return countVowels(text) > vowels;
}

module.exports = filterVowels;