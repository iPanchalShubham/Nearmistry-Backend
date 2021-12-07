import {User} from '../models/items_model.js';
import sharp from 'sharp';
import bcrypt from 'bcryptjs';
import  {Volunteers}  from '../models/volunteers_model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//****FETCHING NEW ITEMS****
export const getHomePage = async(_,res)=>{
    try{
            const Users = await User.find()
             res.json(Users)
    }
        catch(e){
            console.log(e)
        }
}

dotenv.config({path:'../config.env'})
//****POSTING NEW ITEMS****
export const postNewUser = async (req,res)=>{
    try{
     const {lName,fName,age,gender,phoneNumber,selectedFile,occupation} =   req.body
    //  If there is any field that's not filled show this alert box.
     if(!fName|!age|!gender|!phoneNumber|!selectedFile|!occupation){
         return console.log("Please fill the required credidentials!!")
     }
    const phoneNum = User.findOne({phoneNumber:phoneNumber})
     if(phoneNum){
         return console.log("The phone number should be unique,please enter a valid phone number.")
     }
     // selected file -> 'data:mimeType;base64,ImageData'

    let parts = selectedFile.split(';');
    let mimeType = parts[0].split(':')[1];
    let imageData = parts[1].split(',')[1];

    var img = new Buffer.from(imageData, 'base64') ;//Making a buffer object
    // If you want to know more about buffers --> https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/
    //Resizing our image with sharp.
        await sharp(img)
        .rotate()
        .resize(1300,1500)
        .toBuffer()
        .then(async(resizedImageBuffer) => {
            let resizedImageData = resizedImageBuffer.toString('base64');
            let resizedBase64 = `data:${mimeType};base64,${resizedImageData}`;
            //Save new user in our database
            const newUser = new User({fName,lName,age,gender,phoneNumber,resizedBase64,occupation})
            await newUser.save()
            
        })
        .catch(error => {
            // error handeling
            res.send(error)
        })
   
    }catch(e){
        console.log(e)
    }
}
// AUTHENTICATE NEW VOLUNTEERS
export const authenticateVolunteer = async(req,_)=>{
    try {
        const {email,password} = req.body
        if(!email|!password){
            return console.log("please fill the required fields!")
        }
        const userFound = Volunteers.findOne({email:email})
        if(userFound){
            const passwordMatch = bcrypt.compare(password,userFound.password)
            if(passwordMatch){
                return console.log("Volunteer identified!")
            }else{
                return console.log("Invalid creds!")
            }
        }else{
            return console.log("Invalid creds!")
        }
    }catch (error) {
        return console.log(error)
    }
}

// REGISTER NEW VOLUNTEERS
export const postNewVolunteer = async(req,_)=>{
    try{
     const {fName,lName,email,password,passwordConfirm} = req.body
     if(!fName|!lName|!email|!password|!passwordConfirm){
         return console.log("Please fill the required fields!")
     }
 
     const emailFound = await Volunteers.findOne({email:email})
     const confirmationCode = jwt.sign({email:email},process.env.SECRET)
     if(emailFound){
         return console.log("email already exists!!")
        }
     else{
            const volunteer = Volunteers({fName,lName,email,password,passwordConfirm,confirmationCode})
            await volunteer.save()
            
           
        }
 }catch(e){
     console.log(e)
 }   
}