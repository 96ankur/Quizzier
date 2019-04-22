/**
 * userResponse format  [
 *                        {
 *                          "question":"_________________",
 *                           "recordedAnswer":"____________"
 *                         }
 *                        ]
 */


var UserSchema=require('../../models/UserSchema')
var quizSchema=require('../../models/TestSchema')
var resultSchema=require('../../models/ResultSchema')

var attemQues;
var correctAnswers=[]
var answers=[]
var correct=0,incorrect=0,totalObtainedMarks=0

exports.resultCalcuation=(req,res)=>{
    if(!req.decodedData.email||!req.body.quizName||!req.body.userResponse){
        res.json({
            success:false,
            msg:"Incomplete details from front-end"
        })
    }else{
        attemQues=req.body.userResponse
        UserSchema.findOne({email:req.decodedData.email},{name:true,company:true,studentId:true,_id:true},(err,userData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong 1"
                })
            }else{
                let date=new Date()
                let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
                quizSchema.findOne({companyName:userData.company,testDate:currentDate,quizName:req.body.quizName},{Questions:true,_id:true},(err,quizData)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Something went wrong 2"
                        })    
                    }else{
                        for(let key1 in attemQues){
                            for(let key2 in quizData.Questions){
                                if(attemQues[key1].quesName==quizData.Questions[key2].question){
                                    correctAnswers.push({
                                        questionId:quizData.Questions[key2]._id,
                                        question:quizData.Questions[key2].question,
                                        correctAnswer:quizData.Questions[key2].correctAnswer
                                    })

                                    answers.push({
                                        questionId:quizData.Questions[key2]._id,
                                        recordedAnswer:attemQues[key1].answer
                                    })

                                    if(attemQues[key1].answer==quizData.Questions[key2].correctAnswer){
                                        correct++
                                    }else{
                                        if(!(attemQues[key1].answer==undefined)){
                                            incorrect++
                                        }
                                    }
                                }
                            }
                        }
                        totalObtainedMarks=4*correct-incorrect  
                        let date=new Date()
                        let attemptedDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
                        new resultSchema({
                            userDetails:{
                                name:userData.name,
                                studentId:userData.studentId,
                                id:userData._id
                            },
                            companyName:userData.company,
                            quizDate:attemptedDate,
                            quizName:req.body.quizName,
                            quizId:quizData._id,
                            totalMarks:4*(correct+incorrect),
                            correctAnswers:correctAnswers,
                            answers:answers,
                            results:{
                                correctAnswers:correct,
                                incorrectAnswers:incorrect,
                                marksObtained:totalObtainedMarks
                            }
                        }).save((err,data)=>{
                            if(err){
                               res.json({
                                   success:false,
                                   msg:"Somthing went wrong"
                               }) 
                            }else{
                                res.json({
                                    success:true,
                                    msg:"Test data is saved successfully",
                                    id:data._id
                                })
                            }
                        })
                    }

                })
 
            }
        })

    }
}