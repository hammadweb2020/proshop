import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderByID,
  updateOrderToPaid,
} from '../controllers/orderController'
import { protect } from '../middleware/authMiddleware'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderByID)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
