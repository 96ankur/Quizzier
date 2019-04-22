var userDetails=require('../../models/UserSchema')
var sendMail=require('../sendMail')

exports.companyDisapproval=(req,res)=>{
    if(!req.body.studentId){              // it take studentID from body 
        res.json({
            success:false,
            msg:"Student ID is not found"
        })
    }else{
        userDetails.findOneAndUpdate({studentId:req.body.studentId,company:req.decodedData.companyName},{$set:{status:'Disapproved'}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something wernt wrong"
                })
            }else{
                userDetails.findOne({studentId:req.body.studentId,company:req.decodedData.companyName},{email:true,_id:false},(err,data)=>{
                    if(err){
                        res.json({
                            success:true,
                            msg:"Something went wrong"
                        })
                    }else{
                        sendMail.sendMail(data.email,'Your account has been Disapproved by your company')
                        res.json({
                            success:true,
                            msg:"Email has been sent"
                        })
                    }
                })
            }
        })
    }
}