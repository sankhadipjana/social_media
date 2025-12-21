import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";
import cookieParser from "cookie-parser";

const connectDB = async()=>{
    try {
       const conncetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB connected !! DB HOST:${conncetionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB CONNECTION error :",error)
        process.exit(1);
    }
}
// App.use(express.json({limit:'18kb'}))
// App.use(express.urlencoded({etended:true,linit:'18kb'}))
// App.use(express.static("public"))
// App.use(cookieParser())

export default connectDB