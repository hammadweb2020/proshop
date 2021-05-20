import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware'
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import orderRoutes from './routes/orderRoutes'

dotenv.config()

connectDB()

const port = process.env.PORT
const app = express()

app.use(express.json()) /* Access the form data into the Body */

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))


app.use(notFound)
app.use(errorHandler)

app.listen(5000, console.log(`Server running on port ${port}`.yellow.bold))
