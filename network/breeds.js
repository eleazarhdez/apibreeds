const express = require('express');
const router = express.Router();
const getDataFromURL = require('../service')
const filterVowels = require('../utils/filterVowels')


router.get('/breeds', getAllBreeds);

async function getAllBreeds(request, response, next) {
  const vowels = Number(request.query.vowels) || 0;
  const notFilter = vowels <= 0 || isNaN(vowels);
  const URL = 'https://dog.ceo/api/breeds/list/';
  try {
    const breeds = await getDataFromURL(URL)
    if (notFilter){
      return response.status(200).send(breeds.message);
    } else {
      const filteredBreeds = breeds.message.filter(breed => filterVowels(breed, vowels));
      return response.status(200).send(filteredBreeds);
    }
  } catch (error){
    return response.status(500).send(new Error(error));
  }
}

module.exports = router;