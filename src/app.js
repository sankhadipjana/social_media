import express from "express";

const App = express()

App.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

export {App}