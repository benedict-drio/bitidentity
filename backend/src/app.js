const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./routes/identityRoutes');
const rateLimiter = require('./middleware/rateLimiter');

app.use(rateLimiter);


const app = express();
app.use(bodyParser.json());
app.use('/api/identities', identityRoutes);

// Add a route to handle the root URL
app.get('/', (req, res) => {
	res.send('Welcome to the Identity API');
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
