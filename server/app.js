const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

// options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// base directory
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/test', (req, res) => {
  res.status(200).send('get request received');
});

module.exports = app;