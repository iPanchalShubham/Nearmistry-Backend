import mongoose  from "mongoose";

const schema = mongoose.Schema({
    fName:{
        type:String
    },
    lName:{
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    occupation:{
        type:String
    },
    resizedBase64:{
        type:String
    },
    selectedFile:{
        type:String
    }
})

export const User = mongoose.model('User',schema)
