var logUser=require('../models/UserSchema');//require user schema for users
var jwt=require('jsonwebtoken');
const config = require('config');
var resendOtp=require('./resendOtp')
//for switching between UserSchema and TestAdminSchema (from front end)

exports.loginUser=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:"Please fill complete details."
        })
    }else{                                          //person for switching between UserSchema and TestAdminSchema (from front end)
        logUser.findOne({email:req.body.email},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else if(data==null){
                res.json({
                    success:false,
                    msg:'Incorrect credentials'
                })
            }else{  
                if(data.mobileVerification==true){
                    if(!(data.status).localeCompare('Approved')){                       // to check approval by web admin
                        var tokenData={                       // data to be sent with
                            email:data.email,                   // token. Here phone, email and companyName
                            phone:data.phone,
                            companyName:data.companyName                
                        }
        
                        var token=jwt.sign(tokenData,config.get('jwtPrivateKey')) //here encryption is done 
                        if(data.password==req.body.password){
                            res.json({
                                success:true,
                                token:token,                      // here is token is passed to client
                                msg:"You have logged in successfully"
                            })
                        }else{
                            res.json({
                                success:false,
                                msg:"Incorrect credentials"
                            })
                        }
                    }else{
                        res.json({
                            success:false,
                            msg:"You haven't approved by Web Admin yet"
                        })
                    }
                }else{
                                             // here first user is directed to an OTP page for mobile verification
                    // resendOtp.resendOtp()   // then it will automatically send an OTP and upadate OTP details in 
                                            // database
                    res.json({
                        msg:"Your mobile verrification is not done We have sent an OTP on Your mobile number"+data.phone
                    })
                    
                }                         

            }
        })

    }

}
