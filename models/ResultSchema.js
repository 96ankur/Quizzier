
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var resultSchema = new Schema({
    userDetails:{
        name: String,
        studentId:String,
        id: mongoose.Schema.Types.ObjectId
    },
    companyName: String,
    quizDate: String,
    quizName:String,
    totalMarks:Number,
    quizId: mongoose.Schema.Types.ObjectId,
    correctAnswers: [{
        questionId:mongoose.Schema.Types.ObjectId,
        question: String,
        correctAnswer: String
    }],
    answers:[{
        questionId:mongoose.Schema.Types.ObjectId,
        recordedAnswer: String
    }],
    results:{
        correctAnswers: Number,
        incorrectAnswers: Number,
        marksObtained: Number
    }
})

module.exports = mongoose.model('ResultSchema', resultSchema)