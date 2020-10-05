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