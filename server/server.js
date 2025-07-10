import express from 'express'
import "dotenv/config"
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'
import ownerRouter from './routes/ownerRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'

// initialise app

const app = express()

// connect database
await connectDB()

//Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.json("Server is running")
})
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))