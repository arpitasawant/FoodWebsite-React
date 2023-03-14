const express=require('express');
const { signin, signup } = require('../Controlers/Usercontrol');
const userRouter = express.Router();


userRouter.post('/signup',signup);
userRouter.get('/signup',(req,res)=>{
    res.send('signup');
})


userRouter.post('/signin',signin);
userRouter.get('/signin',(req,res)=>{
    res.send('signin');
})


module.exports=userRouter;