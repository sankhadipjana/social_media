import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const App = express()

App.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

App.use(express.json({limit:"16kb"}))
App.use(express.urlencoded({extended:true,limit:"16kb"}))
App.use(express.static("public"))
App.use(cookieParser())



//Routes

import userRouter from "./routes/user.routes.js"

//routes declaration
 App.use("/api/v1/users", userRouter)

export { App}