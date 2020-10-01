const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Port 3003 corresponds to Photo Carousel Module from the original server
const port = 3003;

// options
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// base directory
app.use(express.static(__dirname + '/../client'));

app.get('/carousel', (req, res) => {
  let carousel = Carousel.find({houseName: req.houseName});
  res.send(carousel);
});

app.post('/post', (req, res) => {
  Carousel.create({houseId: req.body.houseId, houseName: req.body.houseName, album: req.body.album});
  res.end();
});

app.listen(port, () => {
  console.log('server started on http://localhost:' + port);
});