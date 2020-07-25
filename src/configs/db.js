const mysql = require('mysql')

const connection = mysql.createConnection({
  user: 'root',
  password: 'toor',
  database: 'sample_api',
  host: 'localhost'
})

module.exports = connection
