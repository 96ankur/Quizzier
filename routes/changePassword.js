var companyDetails = require('../models/TestAdminSchema')
var userDetails = require('../models/UserSchema')

var express = require('express')

exports.changePassword =(req,res)=>{
        if (!req.body.newPassword || !req.body.oldPassword || !req.body.confirmPassword) {
            res.json({
                success: false,
                msg: "please enter fill details."
            })
        } else {
            (req.decodedData.companyName==null?userDetails:companyDetails).
                    findOne({ email: req.decodedData.email }, { password: true, _id: false },
                    (err, data) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Something went  wrong"
                        })
                    }else if(data==null){
                        res.json({
                            success:false,
                            msg:"Something went wrong. Please login again"
                        })
                    }else{

                        if(req.body.oldPassword==data.password){
                            if(req.body.newPassword==req.body.confirmPassword){
                                userDetails.findOneAndUpdate({email:req.decodedData.email},{$set:{password:req.body.newPassword}},(err,data)=>{
                                    if(err){
                                        res.json({
                                            success:false,
                                            msg:"something went wrong"
                                        })
                                    }else{
                                        res.json({
                                            success:true,
                                            msg:"password has been updated"
                                        })
                                    }
                                })
                            }else{
                                res.json({
                                    success:false,
                                    msg:"new Password and confirm does not match"
                                })
                            }
                        }else{
                            res.json({
                                success:false,
                                msg:"old Password is not correct"
                            })
                        }
                    }
                })
        }
}