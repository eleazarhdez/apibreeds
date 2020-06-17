const express = require('express');
const router = express.Router();
const breadService = require('../services/breedFilterService')

router.get('/breeds', getAllBreeds);

async function getAllBreeds(request, response, next) {
  const vowels = Number(request.query.vowels) || 0;
  try {
    const breedWithImages = await breadService.filterbreeds(vowels);
    return response.status(200).send(breedWithImages);
  } catch (error){
    return response.status(500).send(error);
  }
}


module.exports = router;