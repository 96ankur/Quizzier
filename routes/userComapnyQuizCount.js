var userSchema=require('../models/UserSchema')
var companySchema=require('../models/TestAdminSchema')
var quizSchema=require('../models/TestSchema')

exports.userCompanyQuizCount=(req,res)=>{
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
                    let date=new Date()
                    let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()  
                    quizSchema.countDocuments({testDate:{$lt:currentDate}},(err,quizCount)=>{
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
                                    companyCount:companyCount,
                                    quizCount:quizCount
                                }
                            })
                        }
                   })
                }
           })
        }
    })
}