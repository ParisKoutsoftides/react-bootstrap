const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./queries')
const withAuth = require('./middleware');
const cookieParser = require('cookie-parser');


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json({extended: true, limit: '10mb'}));

app.use(cookieParser());

app.use(cors());
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/properties', db.getProperties);

app.get('/properties/:id', db.getPropertyById);

app.get('/searchProperties', db.getPropertiesBySearch);

app.get('/addProperty', withAuth ,db.addProperty);

app.post('/addProperty', withAuth ,db.addPropertyPost);

app.post('/authenticate', db.authenticate);

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});