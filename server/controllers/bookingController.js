import Booking from "../models/Booking.js";
import Car from "../models/Car.js";


// function to check the availabilty of car for a given date
const checkAvailability = async (req,res)=>{
    const bookings = await Booking.find({
        car,
        pickupDate: {$lte: returnDate},
        returnDate: {$gte: pickupDate}
    })
    return bookings.length === 0;
}

// API to Check Availability of cars for the given Date and location

export const checkAvailabilityOfCar = async(req,res)=>{
    try {
        const {location, pickupDate, returnDate} = req.body

        // fetch all available cars for the given location
        const cars = await Car.find({location, isAvaliable: true})

        // check car availability for the given date range using promise
        const availableCarsPromises = cars.map(async (car)=>{
            const isAvailable = await checkAvailability(car._id, pickupDate, returnDate)
            return {...car._doc, isAvailable:isAvailable}
        })
        let availableCars = await Promise.all(availableCarsPromises);
        availableCars = availableCars.filter(car => car.isAvailable === true)

        res.status(200).json({success:true, availableCars})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to create Booking

export const createBooking = async (req,res) =>{
    try {
        const {_id} = req.user;
        const {car,pickupDate, returnDate} = req.body

        const isAvailable = await checkAvailability(car, pickupDate, returnDate)
        if(!isAvailable){
            return res.status(400).json({success:false, message: "Car is not available"})
        }

        const carData = await Car.findById(car)

        // calculate price based on pickup and returnDate
        const picked = new Date(pickupDate)
        const returned = new Date(returnDate)
        const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 *24))
        const price = carData.pricePerDay * noOfDays

        await Booking.create({car, owner: carData.owner, user: _id, pickupDate,returnDate, price})
        res.status(201).json({success: true, message:"Booking Created"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to list User Bookings

export const getUserBookings = async(req, res)=>{
    try {
        const {_id} = req.user;
        const bookings = await Booking.find({user:_id}).populate("car").sort({createdAt: -1})
        res.status(200).json({success: true, bookings})
    } catch (error) {
         console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to list Owner Bookings

export const getOwnerBookings = async(req, res)=>{
    try {
        if(req.user.role !== 'owner'){
            return res.status(400).json({success: false, message:"Unauthorized"})
        }
        const bookings = await Booking.find({owner: req.user._id}).populate('car user').select("-user.password").sort({createdAt: -1})
        res.status(200).json({success: true, bookings})


    } catch (error) {
         console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to change the booking status

export const changeBookingStatus = async(req, res)=>{
    try {
        const {_id} = req.user;
        const {bookingId, status} = req.body

        const booking = await Booking.findById(bookingId)

        if(booking.owner.toString() !== _id.toString()){
            return res.status(400).json({success:false, message:"Unauthorized"})
        }

        booking.status = status;
        await booking.save();

        res.status(200).json({success: true, message:"Status Updated"})
        
    } catch (error) {
         console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}
