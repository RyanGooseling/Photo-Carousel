const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photo-carousel'

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;