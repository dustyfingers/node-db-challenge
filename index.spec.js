const request = require('supertest');

const app = require('./index.js');

describe('index.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', async () => {
            // make  GET request to the / endpoint on the server
            const res = await request(app).get('/');

            // assert we get an http status code 200
            return expect(res.status).toBe(200);
        });
        it("should return { api: 'API RUNNING!'}", async () => {
            // ping api endpoint
            const res = await request(app).get('/');

            // assert res equals correct api response
            return expect(res.body).toEqual({ api: 'API RUNNING!' })
        });
    });
    describe('GET /projects', () => {
        it('returns 200 OK', async () => {
            // make request to /projects endpoint
            const res = await request(app).get('/projects');
            
            // assert response is a 200
            return expect(res.status).toBe(200);
        });
        it('returns JSON', async () => {
            // ping /projects endpoint
            const res = await request(app).get('/projects');

            // assert res is valid jsonß
            return expect(res.type).toMatch(/json/i);
        });
    });
});