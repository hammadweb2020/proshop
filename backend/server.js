import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware'
import productRoutes from './routes/productRoutes'

dotenv.config()

connectDB()

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(5000, console.log(`Server running on port ${port}`.yellow.bold))
