const express = require('express')
const Route = express.Router()

const {
  getProducts,
  postProducts,
  patchProducts,
  deleteProducts
} = require('../controllers/products')

Route
  .get('/', getProducts)
  .post('/', postProducts)
  .patch('/:productId', patchProducts)
  .delete('/:productId', deleteProducts)

module.exports = Route
