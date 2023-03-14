const mongoose =require('mongoose');
const UserSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },
    mnum:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamp:true});

module.exports=mongoose.model('User',UserSchema);