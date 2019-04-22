var  dbperson=require('../models/UserSchema')
var express=require('express')
var router=express.Router()
var sendOtp=require('./otp')
var jwt=require('jsonwebtoken');

var duplicate_key    //for checking duplicate field stored in database

exports.signup_user=(req,res)=>{
    if(!req.body.userName||!req.body.email||!req.body.password||!req.body.name||!req.body.phone||!req.body.company||!req.body.studentId){
        res.json({
            success:false,
            msg: "please enter all details"
        })
    }else{
        let date=new Date()
        let currentDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()        
        new dbperson({
            userName:req.body.userName,
            email: req.body.email,
            password:req.body.password,
            name: req.body.name,
            company: req.body.company,
            studentId: req.body.studentId,
            phone:req.body.phone,
            created_on:currentDate
        }).save((err,data)=>{
            if(err) {
                    if(err.message.includes('userName'))
                        duplicate_key='userName already exist!'
                    else if(err.message.includes('email'))
                        duplicate_key='email already exist!'
                    else if(err.message.includes('phone'))
                        duplicate_key='phone already exist!'
                    else if(err.message.includes('studentId'))
                        duplicate_key='studentId already exist!'
                   
                res.json({
                    success:false,
                    msg:duplicate_key
                })
            }else{
                otp=sendOtp.sendOtp(req.body.email)    //send otp to mobile number and return sent OTP

                dbperson.findOneAndUpdate({email:req.body.email},{$set:{otpDetails:otp}},(err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Something went wrong"
                        })
                    }else{
                        var tokenData={
                            email:req.body.email,      // this token is to send phone(instead of email) to the front end for OTP verificaton
                            // companyName:req.body.companyName                
                        }
                        var tokenBeforeLogin=jwt.sign(tokenData,"secret") //here encryption is done
                        
                        res.json({
                            success:true,
                            token:tokenBeforeLogin,
                            msg:"An OTP is send on the given mobile number"
                        })
                    }
                })
            }
        })
    }
}