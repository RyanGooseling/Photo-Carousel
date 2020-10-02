const faker = require('faker');
const express = require('supertest');
const db = require('./index.js');
const Carousel = require('./Carousel.js');

// specs
const seedCount = 100;
const minAlbumSize = 2;
const maxAlbumSize = 25;

// Helper functions
const createAlbum = function() {
  let album = [];
  let albumSize = Math.floor(Math.random() * (maxAlbumSize - minAlbumSize) + minAlbumSize);
  for (let i = 0; i < albumSize; i++) { // album construction (random images)
    album.push(faker.random.image());
  }
  return album;
};
const generateHouses = function() {
  let houses = [];
  for (let i = 1; i <= seedCount; i++) {
    houses.push({
      carouselId: i,
      houseName: faker.name.firstName(),
      album: createAlbum()
    });
  }
  return houses;
};

// seed db
Carousel.create(generateHouses())
  .then(() => {
    db.close();
  })
  .catch((err) => {
    console.error(err);
  });

