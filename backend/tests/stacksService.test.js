const stacksService = require('../services/stacksService');

describe('stacksService', () => {
	it('should create an identity', async () => {
		await stacksService.createIdentity('test-identity');
		// Add assertions
	});
});
