import express from 'express'
const router = express.Router()
import {
  registerUser,
  authUser,
  getUserProfile,
} from '../controllers/userController'
import { protect } from '../middleware/authMiddleware'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
