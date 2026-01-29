const request = require('supertest');
const app = require('../src/app');

describe('Employee API', () => {
  it('GET /employees should return array', async () => {
    const res = await request(app).get('/employees');
    expect(res.statusCode).toBe(200);
  });

  it('POST /employees should add employee', async () => {
    const res = await request(app)
      .post('/employees')
      .send({ name: 'John', role: 'Engineer' });

    expect(res.statusCode).toBe(201);
  });
});
