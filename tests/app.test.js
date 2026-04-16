const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {

    test('GET /health should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("OK");
    });

    test('POST /users should add user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Bhavik' });

        expect(res.statusCode).toBe(201);
        expect(res.text).toBe("User added");
    });

});
