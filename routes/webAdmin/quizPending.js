/* this API is for webAdmin
   
    For Pending Quizzes testDate > currentDate
*/

var conductedQuiz=require('../../models/TestSchema')

exports.quizPending=(req,res)=>{
    let date=new Date()
    let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()  
    conductedQuiz.find({testDate:{$gte:currentDate}},{companyName:true,quizName:true,testDate:true,_id:false},(err,data)=>{
        if(err){
            res.json({
                success:false,
                mag:"Something went wrong"
            })
        }
        else if(data.length==0){
            res.json({
                success:true,
                msg:"No pending Quizzes"
            })
        }else{
            res.json({
                success:true,
                data:data
            })
        }
    })

}