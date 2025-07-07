import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=>console.log('connected to database'))
        
        await mongoose.connect(`${process.env.MONGODB_URI}/drive-easy`)
    } catch (error) {
        console.log(error.message)
    }
}
export default connectDB
