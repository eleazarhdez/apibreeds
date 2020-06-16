const express = require('express');
const config = require('./config')
const app = express();

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});