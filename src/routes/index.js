const express = require('express')
const Route = express.Router()

const productsRoute = require('./products')

Route
  .use('/products', productsRoute)

module.exports = Route
