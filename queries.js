const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getProperties = (request, response) => {
    pool.query('SELECT * FROM properties ORDER BY property_id ASC', (error, results) => {
      if (error) {
        console.log("ERROR:::" + error);
      }
    response.status(200).json(results.rows)
    })
  };


  const getPropertyById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM properties WHERE property_id = $1', [id], (error, results) => {
      if (error) {
        console.log("ERROR:::" + error);
      }
      response.status(200).json(results.rows)
    })
  };

  const getPropertiesBySearch = (request, response) => {
    const maxPrice = parseInt(request.query.maxPrice);
    const minPrice = parseInt(request.query.minPrice);
    const buildingType = request.query.buildingType;
    const district = request.query.district;
    pool.query('SELECT * FROM properties WHERE price BETWEEN $1 AND $2 AND building_type = $3 AND district = $4;', [minPrice, maxPrice, buildingType, district], (error, results) => {
      if (error) {
        console.log("ERROR:::" + error);
        throw error;
      }
      response.status(200).json(results.rows)
    })
  };

const _isCorrectPassword = function(password, hashedPassword,callback){
    bcrypt.compare(password, hashedPassword, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }
  
const authenticate = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    pool.query('SELECT * FROM users WHERE username = $1;', [username], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (results.rowCount === 0) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        _isCorrectPassword(password, results.rows[0].password,function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { username };
            const token = jwt.sign(payload, 'tempSecret1234');
            res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + (2*3600*1000))})
              .sendStatus(200);
          }
        });
      }
    });
  };

  const addProperty = (request, response) => {
    response.send('Success with authentication');
  };


  const addPropertyPost = (request, response) => {
    const title = request.body.title;
    const price = request.body.price;
    const image = request.body.selectedFile;
    const district = request.body.district;
    const building_type = request.body.buildingType;
    pool.query('INSERT INTO properties (title, price, image, district, building_type) VALUES ($1, $2, $3, $4, $5); ', [title, price, image, district, building_type], (error, results) => {
      if (error) {
        console.log(error);
        response.json({error: 'Internal error please try again'});
      } else {
        response.sendStatus(200);
      }
    })

  };

  process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });


  module.exports = {
    getProperties,
    getPropertyById,
    getPropertiesBySearch,
    addProperty,
    authenticate,
    addPropertyPost
  }