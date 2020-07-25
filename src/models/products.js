const connection = require('../configs/db')

module.exports = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM product'
      connection.query(query, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  postProducts: (data) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO product SET ?'
      connection.query(query, data, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  patchProducts: (id, data) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE product SET ? WHERE id = ?'
      connection.query(query, [data, id], (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  },
  deleteProducts: (id) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM product WHERE id = ?'
      connection.query(query, id, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}
