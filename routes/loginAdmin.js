var logAdmin=require('../models/AdminSchema');//require user schema for users
var jwt=require('jsonwebtoken');
var resendOtp=require('./resendOtp')
//for switching between UserSchema and TestAdminSchema (from front end)

exports.loginAdmin=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:"Please fill complete details."
        })
    }else{                                          //person for switching between UserSchema and TestAdminSchema (from front end)
        logAdmin.findOne({email:req.body.email},{password:true,_id:false},(err,data)=>{
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
                console.log(data.email)
                    var tokenData={                       // data to be sent with
                        email:req.body.email,                   // token. Here phone and email               
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
                }                        
            })

    }

}
