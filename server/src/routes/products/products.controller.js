const { getAllProducts, saveProduct } = require('../../model/products.model')

async function httpGetAllProducts(req, res) {
    try {
        return res.status(200).json(await getAllProducts())        
    } catch (e) {
        res.status(500).json({
            error: `Database query failed ${e}`
        })
    }
}

async function httpPostProduct(req, res) {
    const product = req.body

    // Validate the required fields before trying to insert in table
    if (!product.productName || !product.price) {
        return res.status(400).json({
            error: 'Require fields are missing'
        })
    }

    return res.status(201).json(await saveProduct(product))
}

module.exports = {
    httpGetAllProducts,
    httpPostProduct
}