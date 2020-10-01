const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photo-carousel'
const db = mongoose.connect(mongoUri);

module.exports = db;