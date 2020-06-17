const axios = require('axios');
const memoizee = require('memoizee');

const buildImageUrl = (breed) => {
  return `https://dog.ceo/api/breed/${breed}/images/random`;
}

const buildGetDataFromUrl = async(breed) => {
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

const buildGetDataFromUrlMemoize = memoizee(buildGetDataFromUrl, { promise: true });

const getImagesUrls = async (breeds) => {
  const breedsImagesPromises = breeds.map(buildGetDataFromUrlMemoize);
  const urls = await Promise.all(breedsImagesPromises);
  return urls;
}

module.exports = getImagesUrls;
