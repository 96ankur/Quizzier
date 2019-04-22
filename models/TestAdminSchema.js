var mongoose= require('mongoose')
var Schema=mongoose.Schema
/**
 * 0: pending
 * -1:dissaproved
 * 1: approved
 */

var testAdmin=new Schema({
    created_on:{
        type:String
    },
    userName:{
        type:String,
        required:true,
        unique: true,
    },
    companyName:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Pending'
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

module.exports=mongoose.model('TestAdminSchema',testAdmin)