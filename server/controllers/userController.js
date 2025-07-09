import User from "../models/User.js"
import bcryptjs from 'bcryptjs'
import jwt from'jsonwebtoken'


// Generate JWT Token
const generateToken = (userId)=>{
    const payload = userId
    return jwt.sign(payload, process.env.JWT_SECRET)
}

// register user
export const registerUser = async(req,res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password)
           { return res.status(400).json({success:false, message:"Fill all the fields"})
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(401).json({success:false, message:" User already registered"})
    }

    const hashedPassword = await bcryptjs.hash(password,10)
    const user = await User.create({name, email, password:hashedPassword})

    const token = generateToken(user._id.toString())

    res.status(201).json({success:true, token})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message:error.message})
    }
}


// login user

export const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({success:false, message:"User not found"})
        }
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
            return res.status(402).json({success:false, message: "Invalid Credentials"})
        }
        const token = generateToken(user._id.toString())

        res.status(200).json({success:true, token})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success:false, message: error.message})
    }
}


// getUserData using jwt

export const getUserData = async(req,res) =>{
    try {
        const {user} = req;
        res.status(200).json({success:true, user})
    } catch (error) {
         console.log(error.message)
        res.status(500).json({success:false, message: error.message})
    }
}