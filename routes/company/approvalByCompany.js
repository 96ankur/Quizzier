var userDetails=require('../../models/UserSchema')
var sendMail=require('../sendMail')


exports.companyApproval=(req,res)=>{
    if(!req.body.studentId){              // it take studentID from body 
        res.json({
            success:false,
            msg:"Student ID is not found"
        })
    }else{
        userDetails.findOneAndUpdate({studentId:req.body.studentId,company:req.decodedData.companyName},{$set:{status:'Approved'}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else{
                userDetails.findOne({studentId:req.body.studentId,company:req.decodedData.companyName},{email:true,_id:false},(err,data)=>{
                    if(err){
                        res.json({
                            success:true,
                            msg:"Something went wrong"
                        })
                    }else{
                        sendMail.sendMail(data.email,'Your account has been approved by your company')      // link is the URL that is send to email ID for changing password
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