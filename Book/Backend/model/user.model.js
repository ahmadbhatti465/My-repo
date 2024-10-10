// Import the mongoose library
import mongoose from 'mongoose';

const userschema =mongoose.Schema({
    fullname:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("user",userschema);
export default User;