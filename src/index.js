// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/data.js";
import { App } from "./App.js";


dotenv.config({path:'./env'})
connectDB()

.then(()=>{
    App.listen(process.env.port ||8000,()=>{
        console.log(`survr is runnin on port${process.env.port ||8000}`)
    })
})
.catch((err)=>{
    console.log("connection faild",ree)
})





// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("error:",error)
//     }
// })()