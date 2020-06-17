const axios = require('axios');

const getDataFromURL = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

module.exports = getDataFromURL;