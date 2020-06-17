const express = require('express');
const config = require('./config')
const app = express();
const service = require('./service')

app.use('/api/', service);

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});