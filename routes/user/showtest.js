var test =require('../../models/TestSchema')

exports.showTest = (req, res) => {
    
    if(!req.body.testId){
        res.json({
            success:true,
            msg:"TestId not found"
        })

    }else{
        test.findById({_id:req.body.testId},
                      {quizName:true,noOfQues:true,timeDuration:true,Questions:true,_id:false},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"ERROR"
                })
            }else{
                res.json({
                    success:true,
                    data:data
                })
            }
    
        })
    }
    
} 