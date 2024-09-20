const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./routes/identityRoutes');
const rateLimiter = require('./middleware/rateLimiter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const accessControl = require('./middleware/accessControl');

app.use(rateLimiter);


const app = express();
app.use(bodyParser.json());
app.use('/api/identities', identityRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(accessControl.middleware());

// Add a route to handle the root URL
app.get('/', (req, res) => {
	res.send('Welcome to the Identity API');
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
