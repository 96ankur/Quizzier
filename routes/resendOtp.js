var userDetails=require('../models/UserSchema')
var companyDetails=require('../models/TestAdminSchema')
var sendOtp=require('./otp')


exports.resendOtp=(req,res)=>{
    var user    // it represents either company or endUser depending upon the condition checked below 

    if(!req.decodedData.email){
        res.json({
            success:false,
            msg:"phone number is not present"
        })
    }else{
        if(req.decodedData.companyName){        // companyName is present only in header of company after login
            user=companyDetails                 // Therefore here company name is used to check who has 
        }else{                                  // requested for resend OTP
            user=userDetails
        }
    
        newOtp=sendOtp.sendOtp(req.decodedData.email)    //send otp to mobile number and return sent OTP and time
        user.findOneAndUpdate({email:req.decodedData.email},{$set:{otpDetails:newOtp}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong in updating OTP details"
                })
            }else{
                res.json({
                    success:true,
                    msg:"OTP is sent"
                })
            }
        })

    }
}