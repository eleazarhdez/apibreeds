const axios = require('axios');
const memoizee = require('memoizee');

const buildImageUrl = (breed) => {
  return `https://dog.ceo/api/breed/${breed}/images/random`;
}

const buildDataFromUrl = async(breed) => {
  const url = buildImageUrl(breed);
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((result, body) => {
        resolve({
          breed, 
          image: result.data.message
        });
      })
      .catch(reject);
  })
}

const buildDataFromUrlMemoize = memoizee(buildDataFromUrl, { promise: true });

const getImagesUrls = async (breeds) => {
  const breedsImagesPromises = breeds.map(buildDataFromUrlMemoize);
  const breedsWithImagesURL = await Promise.all(breedsImagesPromises);
  return breedsWithImagesURL;
}

module.exports = {
  buildImageUrl,
  buildDataFromUrl,
  getImagesUrls
}