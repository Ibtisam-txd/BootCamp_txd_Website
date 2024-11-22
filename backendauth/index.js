import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World");
})

const PORT = process.env.PORT || 6000;

app.listen(PORT , ()=>{
    console.log(`Server Running at PORT : ${PORT}`)
})