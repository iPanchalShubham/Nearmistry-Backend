import  mongoose  from "mongoose";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config({path:'../config.env'})
const schema  = new mongoose.Schema({

    fName:{
        type:String
    },
     lName:{
      
        type:String
    },
     email:{
      
        type:String
    },
     password:{
      
        type:String
    },
    passwordConfirm:{
        type:String
    },
    status:{
        type:String,
        enum:['Pending','Active'],
        default:'Pending'
    },
    confirmationCode:{
        type:String,
        unique:true
    }
})


// hashing the passwords 
schema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.passwordConfirm = await bcrypt.hash(this.passwordConfirm,12)
    }
    next();
});

//Declaring, assigning and exporting the volunteers_schema.
export const Volunteers = mongoose.model("volunteers",schema);
