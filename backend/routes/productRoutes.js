import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel'
const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)

// @desc    Fetch sigle product
// @route   GET /api/product/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
      //  .json({ message: 'Product not found' })
    }
    //const product = products.find((p) => p._id === req.params.id)
  })
)

export default router
