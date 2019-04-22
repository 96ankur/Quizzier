/**
 * This API will show all the previously attempted Quizzes by user
 */

var userDetails=require('../../models/UserSchema')
var quizDetails=require('../../models/ResultSchema')

exports.userHistory=(req,res)=>{
    if(!req.decodedData.email){
        res.json({
            success:false,
            msg:"Something went wrong"
        })
    }else{
        userDetails.findOne({email:req.decodedData.email},{_id:true},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else{
                quizDetails.find({"userDetails.id":data._id},{quizName:true,totalMarks:true,quizDate:true,"results.marksObtained":true,_id:false},(error,quizData)=>{
                    if(error){
                        res.json({
                            success:false,
                            msg:"Somthing went wrong"
                        })
                    }else{
                        for(let quiz in quizData){
                           quizData[quiz].results=quizData[quiz].results.marksObtained
                        }
                        res.json({
                            success:true,
                            data:quizData
                        })
                    }
                })
            }
        })
    }
}