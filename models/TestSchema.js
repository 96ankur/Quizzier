var mongoose = require('mongoose')
var Schema = mongoose.Schema

var test = new Schema({
    companyName: {
        type: String
    },
    quizName: {
        type: String,
        required: true
    },
    noOfQues: {
        type: Number,
        required: true
    },
    timeDuration: {
        type: Number,
        required: true
    },
    testDate: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    Questions: [{
        question: String,
        correctAnswer: String,
        incorrectAnswers:[String]
    }]
})

module.exports = mongoose.model('TestSchema', test)