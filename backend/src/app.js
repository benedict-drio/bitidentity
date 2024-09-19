const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./routes/identityRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/identities', identityRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
