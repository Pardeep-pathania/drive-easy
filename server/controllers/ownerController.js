import imagekit from "../config/imagekit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from 'fs'

// API to change role to owner

export const changeRoleToOwner = async (req, res) => {
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.status(200).json({success: true, message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}

// API to list car

export const addCar = async(req, res)=>{
    try {

        const {_id} = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        // upload image to imagekit

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // optimization through imagekit URL transformation
        var optimizedImageUrl = imagekit.url({
            path:response.filePath,
            transformation:[{
                "width": "1280"}, // width resizing
            {quality: "auto"},      // Auto compression
            {format:'webp'}       // convert to modern format
            ]
        })

        const image = optimizedImageUrl;
        await Car.create({...car, owner: _id, image})

        res.status(201).json({success: true, message: "Car Added"})

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to list owner cars

export const getOwnerCars = async(req,res) =>{
    try {
        const {_id} = req.user;
        const cars = await Car.find({owner: _id})

        res.status(200).json({success: true, cars})
    
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}

// Api to toggle car availability

export const toggleCarAvailability = async(req,res) =>{
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId)

        // checking is car belongs to user
        if(car.owner.toString() !== _id.toString()){
            return res.status(400).json({success:false, message: "Unauthorized"})
        }

        car.isAvaliable = !car.isAvaliable
        await car.save()

        res.status(200).json({success: true, message: "Availability Toggled"})
    
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// Api to delete a car

export const deleteCar = async(req,res) =>{
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId)

        // checking is car belongs to user
        if(car.owner.toString() !== _id.toString()){
            return res.status(400).json({success:false, message: "Unauthorized"})
        }

        car.owner = null
        car.isAvaliable = false
        await car.save()

        res.status(200).json({success: true, message: "Car Removed"})
    
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// API to get Dashboard Data

export const getDashboardData = async (req, res) =>{
    try {
        const {_id, role} = req.user;

        if(role !== 'owner'){
            return res.status(400).json({success: false, message: "Unauthorised"})
        }
        const cars = await Car.find({owner: _id})
    } catch (error) {
         console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}