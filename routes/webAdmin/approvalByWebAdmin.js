var companyDetails=require('../../models/TestAdminSchema')
var sendMail=require('../sendMail')


exports.webAdminApproval=(req,res)=>{
    if(!req.body.companyName){             // it take company name from body 
        res.json({
            success:false,
            msg:"Company name is not found"
        })
    }else{
        companyDetails.findOneAndUpdate({companyName:req.body.companyName},{$set:{status:'Approved'}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something wernt wrong"
                })
            }else{
                companyDetails.findOne({companyName:req.body.companyName},{email:true,_id:false},(err,data)=>{
                    if(err){
                        res.json({
                            success:true,
                            msg:"Something went wrong"
                        })
                    }else{
                        sendMail.sendMail(data.email,'Your account has been approved by Web Admin')
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