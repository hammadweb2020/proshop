import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware'
import productRoutes from './routes/productRoutes'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes'
import orderRoutes from './routes/orderRoutes'
import uploadRoutes from './routes/uploadRoutes'

dotenv.config()

connectDB()

const port = process.env.PORT
const app = express()

if(process.env.NODE_ENV === 'development'){

  app.use(morgan('dev'))
}

app.use(express.json()) /* Access the form data into the Body */


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname=  path.resolve() 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))




if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}



app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT || 5000, console.log(`Server running on port ${port}`.yellow.bold))
