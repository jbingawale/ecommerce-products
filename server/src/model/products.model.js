const { v4: uuidv4 } = require("uuid")
const db = require("../services/db")
const { keysToCamelCase } = require('../services/utilities')

async function getAllProducts(req, res) {
  try {
    const result = await db.query(
      "SELECT * FROM public.products ORDER BY id DESC"
    )
    return result.rows.map(row => keysToCamelCase(row))
  } catch (err) {
    throw new Error(`Error fetching products - ${err}`)
  }
}

async function saveProduct(product) {
  try {
    const { productName, price, category = "", stockStatus:stock_status = "" } = product

    const values = [uuidv4(), productName, price, category, stock_status]

    const sqlQuery = `
            INSERT INTO products 
            (id, product_name, price, category, stock_status)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, product_name`
    const result = await db.query(sqlQuery, values)
    return result.rows[0]
  } catch (err) {
    throw new Error(`Error adding product - ${err}`)
  }
}

module.exports = {
  getAllProducts,
  saveProduct,
}
