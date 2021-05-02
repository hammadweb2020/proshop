import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db'
import colors from 'colors'
import users from './data/users'
import products from './data/products'
import User from './models/userModel'
import Product from './models/productModel'
import Order from './models/orderModel'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProduct)
    console.log(`Data Imported`.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

const destoryData = async () => {
  try {
    await Order.deleteMany()
    await User.deleteMany()
    await Product.deleteMany()

    console.log(`Data Destroyed`.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

if (process.argv[2] === '-d') {
  destoryData()
} else {
  importData()
}
