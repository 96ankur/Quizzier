var userSchema=require('../../models/UserSchema')

exports.sortedUserDetails=(req,res)=>{   //companyName is present in header of comapany and company is stored in user schema 
    if(!req.body.type){
        res.json({
            success:false,
            msg:"Something went wrong"
        })
    }
    userSchema.find({company:req.decodedData.companyName,status:req.body.type,mobileVerification:true},{studentId:true,name:true,status:true,userName:true,email:true,phone:true,created_on:true,_id:false},(err,data)=>{
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