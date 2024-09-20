const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./routes/identityRoutes');
const rateLimiter = require('./middleware/rateLimiter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const accessControl = require('./middleware/accessControl');
const analyticsService = require('./services/analyticsService');

app.use(rateLimiter);


const app = express();
app.use(bodyParser.json());
app.use('/api/identities', identityRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(accessControl.middleware());

app.get('/api/reports', async (req, res) => {
	const reports = await analyticsService.getReports();
	res.status(200).json(reports);
});

// Add a route to handle the root URL
app.get('/', (req, res) => {
	res.send('Welcome to the Identity API');
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});

