var QuizSchema = require('../../models/TestSchema')

exports.deleteQuiz=(req,res)=>{
    if (!req.body._id) {
        res.json({
            success: false,
            msg: "Something went wrong"
        })
    } else {
        QuizSchema.remove({_id:req.body._id},(err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                console.log(data)
                res.json({
                    success: true,
                    msg: "Quiz deleted Successfully"
                })
            }
        })
    }
}
