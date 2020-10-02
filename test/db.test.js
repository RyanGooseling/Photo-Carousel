/**
 * @jest-environment node
 */

const Carousel = require('../db/Carousel.js');
const db = require('../db/index.js');

describe('database tests', () => {
  test('check if database exists', (done) => {
    expect(Carousel).toBeDefined();
    done();
  });

  test('check that find returns an array of carousels', (done) => {
    Carousel.find({})
      .then((carousel) => {
        expect(Array.isArray(carousel)).toBe(true);
        done();
      })
      .catch((err) => {
        console.error(err);
        done();
      });
  });
});