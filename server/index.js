import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/messageRoute.js";
dotenv.config({});
const app = express();
app.use(cookieParser());
app.use(express.json());


app.use("/api/v1/user",userRouter); 
app.use("/api/v1/message",messageRouter);
 


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`);
})







