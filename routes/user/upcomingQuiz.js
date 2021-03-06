/* this API is for user
   it will show user all the tests that is going on or will be conducted in future
*/

var Quiz=require('../../models/TestSchema')

exports.upcomingQuiz=(req,res)=>{
    let date=new Date()
    let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() 
    Quiz.find({testDate:{$gt:currentDate}},{quizName:true,testDate:true,_id:false},(err,data)=>{
        if(err){
            res.json({
                success:false,
                mag:"Something went wrong"
            })
        }
        else if(data.length==0){
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