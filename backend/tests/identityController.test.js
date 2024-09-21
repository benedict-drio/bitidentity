const request = require('supertest');
const app = require('../app');

describe('POST /api/identities', () => {
	it('should create an identity', async () => {
		const response = await request(app)
			.post('/')
			.send({ identity: 'test-identity' });
		expect(response.status).toBe(201);
		expect(response.text).toBe('Identity created');
	});
});
