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




// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin 
const createProduct = asyncHandler(async (req, res) => {
const product = new Product({
name: 'sample Name',
price:0,
user: req.user._id,
image: '/images/sample.jpg',
brand: 'sample brand',
category: 'sample category',
countInStock:0,
numReviews: 0,
desciption: 'sample description'
})

const createdProduct = await product.save()
res.status(201).json(createdProduct)

})


// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin 
const updateProduct = asyncHandler(async (req, res) => {

const {name, price, desciption, image, brand, category, countInStock} = req.body


const product = await Product.findById(req.params.id)

if(product)
{
product.name= name
product.price= price
product.desciption= desciption
product.image= image
product.brand= brand
product.category= category
product.countInStock= countInStock


  const udpatedProduct = await product.save()
  res.status(201).json(udpatedProduct)
}

else {
  res.status(404)
  throw new Error('Product not found')   

}
  
   
  
})
  
  
export { getProducts, getProductById, deleteProduct, createProduct, updateProduct }
