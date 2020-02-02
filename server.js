const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const db = require('./queries')


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/properties', db.getProperties);

app.get('/properties/:id', db.getPropertyById);

app.get('/searchProperties', db.getPropertiesBySearch);
