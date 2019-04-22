/*
    This API will run when user/company click Url sent on their email id
 */

var userSchema=require('../models/UserSchema')
var companySchema=require('../models/TestAdminSchema')
const atob=require('atob')
const url=require('url')

exports.forgetPasswordUrl=(req,res)=>{
    if(!req.body.newPassword||!req.body.confirmPassword){
        res.json({
            success:false,
            msg:"please enter all details"
        })
    }else{
        if(req.body.person!='user'&&req.body.person!='company'){
            res.json({
              success: false,
              msg: 'URL has been changed.\nPlease click once again on that URL'
            })
        }else if(req.body.newPassword==req.body.confirmPassword){
            (req.body.person=='user'?userSchema:companySchema).findOneAndUpdate({email:req.body.email},{$set:{password:req.body.newPassword}},(err,data)=>{
                if(err){
                    res.json({
                        success:false,
                        msg:"Something went wrong"
                    })
                }else if(data==null){
                    res.json({
                        success:false,
                        msg:"URL has been changed.\nPlease click once again on that URL"
                    })
                }else{
                    res.json({
                        success:true,
                        msg:"password has been changed successfully"
                    })
                }
            })
        }else{
            res.json({
                success:false,
                msg:"new and confirm doesn't match"
            })
        }
    }
}
