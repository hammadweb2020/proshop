import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import colors from 'colors'
import productRoutes from './routes/productRoutes'

dotenv.config()

connectDB()

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: port === 'production' ? null : err.stack,
  })
})

app.listen(5000, console.log(`Server running on port ${port}`.yellow.bold))
