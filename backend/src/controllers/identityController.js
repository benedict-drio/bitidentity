const stacksService = require('../services/stacksService');
const jwt = require('jsonwebtoken');
const encryptionService = require('../services/encryptionService');

const secretKey = 'your_jwt_secret';

exports.createIdentity = async (req, res) => {
	const { identity } = req.body;
	try {
		// Encrypt identity data before saving
		const encryptedIdentity = encryptionService.encrypt(identity);
		await stacksService.createIdentity(identity);
		res.status(201).send('Identity created');
	} catch (error) {
		res.status(500).send(error.message);
	}
};

exports.getIdentity = async (req, res) => {
	const { id } = req.params;
	try {
		const identity = await stacksService.getIdentity(id);
		// Decrypt identity data before sending
		const decryptedIdentity = encryptionService.decrypt(identity.encryptedData, identity.iv);
		res.status(200).json(identity);
	} catch (error) {
		res.status(500).send(error.message);
	}
};