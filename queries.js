const Pool = require('pg').Pool
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

  process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });


  module.exports = {
    getProperties,
    getPropertyById,
    getPropertiesBySearch
  }