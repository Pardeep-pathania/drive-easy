import express from 'express';
import { changeBookingStatus, checkAvailabilityOfCar, createBooking, getOwnerBookings, getUserBookings } from '../controllers/bookingController.js';
import { protect } from '../middlewares/auth.js';

const bookingRouter = express.Router()

bookingRouter.post('/check-availability', checkAvailabilityOfCar)
bookingRouter.post('/create', createBooking)
bookingRouter.get('/user', protect, getUserBookings )
bookingRouter.get('/owner', protect, getOwnerBookings )
bookingRouter.get('/change-status', protect, changeBookingStatus )

export default bookingRouter