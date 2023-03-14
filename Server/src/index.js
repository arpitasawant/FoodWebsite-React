const express=require('express');
const mongoose=require('mongoose');
const cors = require("cors");
const morgan = require("morgan");

const userRouter =require('./Routers/userRouter');
const dotenv=require('dotenv');
const { signup } = require('./Controlers/Usercontrol');
require("dotenv").config();
const app=express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use('/home',userRouter);

const PORT=process.env.PORT || 5000;

app.use('/home',(req,res)=>{
    res.status(200).send('hello home');
})











mongoose.connect("mongodb://localhost:27017/food_website").then(()=>{
app.listen(PORT,()=>{
    console.log('Server is running');
})
}).catch((err)=>{
    console.log(err);
})