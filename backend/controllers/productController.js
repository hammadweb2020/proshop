import asyncHandler from 'express-async-handler'
import Product from '../models/productModel'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc    Fetch sigle product
// @route   GET /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
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



// @desc    Delete the product
// @route   Delete /api/product/:id
// @access  Private/Admin 
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({message: 'Product Removed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
    //  .json({ message: 'Product not found' })
  }
  //const product = products.find((p) => p._id === req.params.id)
})










export { getProducts, getProductById, deleteProduct }
