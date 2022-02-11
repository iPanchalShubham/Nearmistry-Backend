import express from 'express';
import routes from './appRoute/routes.js'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const app  = express();
//DOTENV
dotenv.config({path:'./config.env'})

//JSON parser
app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ limit: "5mb", extended: true, parameterLimit: 50000 }))

//Middleware Routes
app.use(cors())

// Connection to DB
const db  = 'Your DB string'
mongoose.connect(process.env.MONGODB_URI||db,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Wait....\n Handshake confirmed.')
}).catch(e =>console.log(e))

app.use('/volunteerSection',routes)
if(process.env.NODE_ENV == "production"){
    app.use('/volunteerSection',routes)
}

app.listen(process.env.PORT||5000,()=>console.log(`Application Running on port ${process.env.PORT}`))
