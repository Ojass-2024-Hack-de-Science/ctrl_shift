import express from 'express'
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from './routes/routes.js';
dotenv.config();
connectDB();
const app=express()
app.use(express.json())

app.use('/api',router);

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);
})