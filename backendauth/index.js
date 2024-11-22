import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import authRoutes from './routes/auth.route.js'
import cors from 'cors'



dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.get("/", (req,res)=>{
    res.send("Hello World");
})

const PORT = process.env.PORT || 6000;

app.listen(PORT , ()=>{
    console.log(`Server Running at PORT : ${PORT}`)
})