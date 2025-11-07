const express = require('express')
const productsRouter = require('./routes/products/products.router') 
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors({
    origin: 'http://localhost:5173/'
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/products', productsRouter)

app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
