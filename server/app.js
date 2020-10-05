const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// base directory
app.use(express.static(__dirname + '/../client'));

app.get('/test', (req, res) => {
  res.status(200).send('get request received');
});

module.exports = app;