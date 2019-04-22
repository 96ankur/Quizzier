var userSchema=require('../../models/UserSchema')

exports.userCount=(req,res)=>{
    userSchema.countDocuments({mobileVerification:true},(err,userCount)=>{
        if(err){
            res.json({
                success:false,
                msg:"Something went wrong"
            })
        }else{
            res.json({
                success:true,
                userCount:userCount
            })
        }
    })
}
