const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/breeds', getAllBreeds);

async function getAllBreeds(request, response, next) {
  const breeds = 'https://dog.ceo/api/breeds/list/';
  try {
    const data = await getDataFromURL(breeds)
    return response.status(200).send(data);
  } catch (error){
    return new Error(error);
  }
}

const getDataFromURL = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

module.exports = router;