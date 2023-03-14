const userModel =require('../models/User');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const SECRET_KEY="USERAPI";;


const signup=async(req,res)=>{
    //existng user
    // hash password
    // user creation
    // token creation
           const {name,email,mnum,password}=req.body;

           try {
                const Exitstinguser=await userModel.findOne({email:email});
                if(Exitstinguser){
                   return res.status(422).send('Already exist');
                }

                const hashpassword= await bcrypt.hash(password,10);

                const result= await userModel.create({
                    name:name,
                    email:email,
                    mnum:mnum,
                    password:hashpassword
                });

                const token=jwt.sign({email:result.email,id:result._id}, SECRET_KEY);
                res.status(201).json({name:result,token:token});

        
            } catch (error) {
                console.log(error);
                         }
}


const signin= async (req,res)=>{
    
    const {email,password}=req.body;

    try {
        const Exitstinguser=await userModel.findOne({email:email});
        if(!Exitstinguser){
            return res.status(404).send('User not found');
         }
         const hashpassword= await bcrypt.hash(password,10);


         const ismatch=await bcrypt.compare(password,Exitstinguser.hashpassword)
         if (!ismatch) {
             res.status(201).send("invalid ");
         }

         const token=jwt.sign({email:Exitstinguser.email,id:Exitstinguser._id}, SECRET_KEY);
         res.status(201).json({name:Exitstinguser,token:token});

   
   
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={signin,signup};