/* this API is for company
   it will show all the quizzes conducted by comapany
*/

var conductedQuiz=require('../../models/TestSchema')

exports.quizConductedCompany=(req,res)=>{
    conductedQuiz.find({testDate:{$lt:new Date()},companyName:req.decodedData.companyName},{quizName:true,testDate:true,createdBy:true,noOfQues:true,_id:false},(err,data)=>{
        if(err){
            res.json({
                success:false,
                mag:"Something went wrong"
            })
        }
        else if(data.length ==0){
            res.json({
                success:true,
                msg:"Quiz is not conducted yet"
            })
        }
        else{
            res.json({
                success:true,
                data:data
            })
        }
    })

}