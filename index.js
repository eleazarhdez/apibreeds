const express = require('express');
const config = require('./config')
const app = express();
const breeds = require('./network/breeds')

app.use('/api/', breeds);

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});