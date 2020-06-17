const countVowels = text => {
  const numberOfVowels = text.match(/[aeiou]/gi);
  return numberOfVowels === null ? 0 : numberOfVowels.length;
}

module.exports = countVowels;