/* this API is for user
   it will show user all the tests that is going on or will be conducted in future
*/

var quizSchema=require('../../models/TestSchema')

exports.currentQuiz=(req,res)=>{
    let date=new Date()
     let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
    quizSchema.find({testDate:currentDate},{timeDuration:true,quizName:true,_id:true},(err,data)=>{
        if(err){
            res.json({
                success:false,
                mag:"Something went wrong"
            })
        }
        else if(data.length==0){
            res.json({
                success:true,
                msg:"No current quiz is avaliable"
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