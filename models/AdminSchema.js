
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var adminSchema = new Schema({
    userName: {
        type: String,
        required: true, 
        unique: true
    },
    email: {
        type: String,
        unique: true ,
        required : true
    },
    password: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('AdminSchema', adminSchema)