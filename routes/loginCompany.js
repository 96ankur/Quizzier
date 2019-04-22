var logCompany=require('../models/TestAdminSchema');//require admin schema for test admin
var jwt=require('jsonwebtoken');
var resendOtp=require('./resendOtp')
//for switching between UserSchema and TestAdminSchema (from front end)

exports.loginCompany=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:"Please fill complete details."
        })
    }else{                                          //person for switching between UserSchema and TestAdminSchema (from front end)
        logCompany.findOne({email:req.body.email},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else if(data==null){
                res.json({
                    success:false,
                    msg:'This email is not registered'
                })
            }else{  
                if(data.mobileVerification==true){
                    console.log(data.status)
                    if(!(data.status).localeCompare('Approved')){                       // to check approval by web admin
                        var tokenData={                       // data to be sent with
                            email:data.email,                   // token. Here phone and email
                            phone:data.phone,
                            companyName:data.companyName                
                        }
        
                        var token=jwt.sign(tokenData,"secret") //here encryption is done 
                        if(data.password==req.body.password){
                            res.json({
                                success:true,
                                token:token,                      // here is token is passed to client
                                msg:"You have logged in successfully"
                            })
                        }else{
                            res.json({
                                success:false,
                                msg:"Incorrect Password"
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
                    // resendOtp.resendOtp() // then it will automatically send an OTP and upadate OTP details in 
                                            // database
                    res.json({
                        msg:"Your mobile verrification is not done We have sent an OTP on Your mobile number"+data.phone
                    })
                    
                }                         

            }
        })

    }

}
