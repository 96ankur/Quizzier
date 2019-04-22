var userSchema=require('../../models/UserSchema')
var quizSchema=require('../../models/TestSchema')
var resultSchema=require('../../models/ResultSchema')

exports.quizAlreadyAttemp=(req,res)=>{
    if(!req.body.quizName){
        res.json({
            success:false,
            msg:"Quiz Name not found"
        })
    }else{
        userSchema.findOne({email:req.decodedData.email},{company:true,_id:true},(err,userData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong 1"
                })
            }else{
                let date=new Date()
                let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
                quizSchema.findOne({companyName:userData.company,testDate:currentDate,quizName:req.body.quizName},{_id:true},(err,quizData)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Something went wrong 2"
                        })    
                    }else{
                        resultSchema.findOne({"userDetails.id":userData._id,quizId:quizData._id},(err,data)=>{
                            if(err){
                                res.json({
                                    success:false,
                                    msg:"Something went wrong"
                                })
                            }else if(data==null){
                                res.json({
                                    success:true,
                                    data:data,
                                    msg:"you haven't attempted this quiz yet"
                                })
                            }else{
                                res.json({
                                    success:true,
                                    msg:"you already have attempted this quiz",
                                    data:data
                                })
                            }
                        })
                    }
                })    
            }        
        })
    }
}