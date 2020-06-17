const getDataFromURL = require('./getUrlService');
const filterVowels = require('../utils/filterVowels')
const breedImageService = require('./breedImageService')

let breeds;
const initialize = async () => {
  const URL = 'https://dog.ceo/api/breeds/list/';
  breeds = (await getDataFromURL(URL)).message;
}

const filterbreeds = async (vowels) => {
  const filteredBreeds = breeds.filter(breed => filterVowels(breed, vowels));
  const breedWithImages = await breedImageService.getImagesUrls(filteredBreeds);
  return breedWithImages
}

initialize();

module.exports.filterbreeds = filterbreeds ;

