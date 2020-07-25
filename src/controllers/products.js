const productsModel = require('../models/products')

module.exports = {
  getProducts: (request, response) => {
    // PROMISE THEN & CATCH
    productsModel.getProducts()
      .then(result => response.json(result))
      .catch(error => response.json(error))
  },
  postProducts: async (request, response) => {
    const data = {
      sku: request.body.sku,
      name: request.body.name,
      price: request.body.price,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    // ASYNC AWAIT
    try {
      const result = await productsModel.postProducts(data)
      response.json(result)
    } catch (error) {
      response.json(error)
    }
    // -> Insert Product -> QUERY 1 Insert Product
    // -> Check Category product.category -> QUERY Select WHERE category = product.category
    // -> Insert Category -> QUERY 3 Insert Category
  },
  patchProducts: async (request, response) => {
    const id = request.params.productId
    const data = {
      sku: request.body.sku,
      name: request.body.name,
      price: request.body.price,
      updatedAt: new Date()
    }

    try {
      const result = await productsModel.patchProducts(id, data)
      response.json(result)
    } catch (error) {
      response.json(error)
    }
  },
  deleteProducts: async (request, response) => {
    const id = request.params.productId

    try {
      const result = await productsModel.deleteProducts(id)
      response.json(result)
    } catch (error) {
      response.json(error)
    }
  }
}
