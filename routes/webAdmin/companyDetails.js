var companyDetails=require('../../models/TestAdminSchema')

exports.companyDetails=(req,res)=>{
    companyDetails.find({mobileVerification:true},{companyName:true,status:true,userName:true,email:true,phone:true,created_on:true,_id:false},(err,data)=>{
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