const stacksService = require('../services/stacksService');

exports.createIdentity = async (req, res) => {
	const { identity } = req.body;
	try {
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
		res.status(200).json(identity);
	} catch (error) {
		res.status(500).send(error.message);
	}
};