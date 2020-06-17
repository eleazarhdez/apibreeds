const countVowels = text => {
  var numberOfVowels = text.match(/[aeiou]/gi);
  return numberOfVowels === null ? 0 : numberOfVowels.length;
}

module.exports = countVowels;