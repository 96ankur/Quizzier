/**
 * 0: pending
 * -1:dissaproved
 * 1: approved
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    created_on:{
        type:String
    },email: {
        type: String,
        unique: true,
        required:true
    },
    name:{ 
        type:String,
        required:true
    },
    phone: {
        type: String,
        unique: true,
        required:true
    },
    company: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    google: {
        token: String,
        image: String,
        email: String,
    },
    status: {
        type: String,
        default:'Pending'
    },
    userName: {
        type: String,
        unique:true,
        required:true
    },
    studentId: {
        type: String,
        unique: true,
        required:true
    },
    mobileVerification:{
        type:Boolean,
        default:false
    },
    otpDetails:{
        otp:Number,
        time:{
            type:Number,
            default:Date.now()
        }
    }
})
module.exports=mongoose.model('UserSchema',userSchema)