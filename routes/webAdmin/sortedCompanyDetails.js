var companyDetails=require('../../models/TestAdminSchema')

exports.sortedCompanyDetails=(req,res)=>{
    if(!req.body.type){
        res.json({
            success:false,
            msg:"Something went wrong"
        })
    }
    companyDetails.find({status:req.body.type,mobileVerification:true},{companyName:true,status:true,userName:true,email:true,phone:true,created_on:true,_id:false},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"something went wrong"
            })
        }else{
            res.json({
                success:true,
                data:data
            })
        }
    })

}