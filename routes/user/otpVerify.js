var userDetails=require('../../models/UserSchema')

exports.otpVerify=(req,res)=>{
    if(!req.body.otp){
        res.json({
            success:false,
            msg: "Please enter OTP"
        })
    }else{
        userDetails.findOne({email:req.decodedData.email},{otpDetails:true,_id:false},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:err
                })
            }else{
                if(data==null){
                    res.json({
                        success:false,
                        msg:'Data not found'
                    })
                }
                else if(req.body.otp==data.otpDetails.otp){
                    if((Date.now()-data.otpDetails.time)<240000){    //OTP validation time  4 minutes
                        userDetails.findOneAndUpdate({email:req.decodedData.email},{$set:{mobileVerification:true}},(err,updatedData)=>{
                            if(err){
                                res({
                                    success:false,
                                    msg:"Something went wrong in updating mobileVerification"
                                })
                            }else{
                                res.json({
                                    success:true,
                                    msg:"Your account has been created successfully"
                                })
                            }
                        })
                    }else{
                        res.json({
                            success:false,
                            msg:"Your otp has expired"
                        })
                    }  
                }else{
                    res.json({
                        success:false,
                        msg: "Please enter correct OTP"
                    })
                }
            }
            
        })        
    }
}