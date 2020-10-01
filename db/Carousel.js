const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
  carouselId: Number,
  houseName: String,
  album: [{
    type: String
  }]
});

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;