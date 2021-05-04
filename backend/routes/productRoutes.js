import express from 'express'
import asuncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

app.get(
  '/',
  asuncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

app.get(
  '/:id',
  asuncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not Found')
    }
  })
)

export default router
