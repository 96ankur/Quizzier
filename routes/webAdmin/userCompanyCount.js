var userSchema=require('../../models/UserSchema')
var companySchema=require('../../models/TestAdminSchema')

exports.userCompanyCount=(req,res)=>{
    userSchema.countDocuments({mobileVerification:true},(err,userCount)=>{
        if(err){
            res.json({
                success:false,
                msg:"Something went wrong"
            })
        }else{
            companySchema.countDocuments({mobileVerification:true},(err,companyCount)=>{
                if(err){
                    res.json({
                        success:false,
                        msg:"Something went wrong"
                    })
                }else{
                    res.json({
                        success:true,
                        count:{
                            userCount:userCount,
                            companyCount:companyCount
                        }
                    })
        
                }
            })
        }
    })
}