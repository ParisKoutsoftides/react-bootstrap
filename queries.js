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
        throw error
      }
    response.status(200).json(results.rows)
    })
  }


  const getPropertyById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM properties WHERE property_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {
    getProperties,
    getPropertyById
  }