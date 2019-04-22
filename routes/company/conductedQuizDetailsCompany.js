/*this api will show student's name, id, marks who have participated in quiz to company */

var studentResult=require('../../models/ResultSchema')

exports.resultForCompany=(req,res)=>{
    if(!req.body.quizName&&!req.body.testDate&&!req.body.companyName){
        res.json({
            success:false,
            msg:"quizName, testDate or companyName not found"
        })
    }else{
        studentResult.findOne({quizName:req.body.quizName,date:req.body.testDate,companyName:req.body.companyName},{userDetails:true,results:true,_id:false},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else{
                res.json({
                    success:true,
                    data:{
                        sutdentName:data.userDetails.name,
                        sutdentId:data.userDetails.studentId,
                        marks:data.results.totalMarks
                    }
                })
            }

        })
    }

}