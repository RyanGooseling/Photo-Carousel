/**
 * @jest-environment node
 */
const request = require('supertest');
const app = require('../server/app.js');

describe('server tests', () => {
  test('responds to a get request', done => {
    request(app)
      .get('/test')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
    });
  });
});