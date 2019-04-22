var dbtestdetails = require('../../models/TestSchema')

var ques
exports.createTest = (req, res) => {
    if (!req.body.quizName || !req.body.timeDuration || !req.body.noOfQues || !req.body.createdBy || !req.body.testDate ||!req.body.Questions) {
        res.json({
            success: false,
            msg: "please enter all details for test."
        })
    } else {
        new dbtestdetails({
            companyName:req.decodedData.companyName,
            quizName: req.body.quizName,
            timeDuration: req.body.timeDuration,
            noOfQues: req.body.noOfQues,
            createdBy: req.body.createdBy,
            testDate: req.body.testDate,
            Questions:req.body.Questions
        }).save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: 'Something went wrong'
                })
            } else {
                res.json({
                    success: true,
                    msg: "Quiz created successfully"
                })
            }

        })
    }
}