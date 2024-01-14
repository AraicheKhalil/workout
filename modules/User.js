const mongoose = require('mongoose')
const { isEmail } = require('validator')

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "This field must be required"],
        unique : [true , "This email is already registered befor , Try another one please"],
        validator : [isEmail , "Please entre the valid email"]
    },
    password : {
        type : String,
        required : [true,"This field must be required"],
    }
})






module.exports = mongoose.model('user',UserSchema)


