import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async()=>{
    try {
       const conncetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB connected !! DB HOST:${conncetionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB CONNECTION error :",error)
        process.exit(1);
    }
}
export default connectDB