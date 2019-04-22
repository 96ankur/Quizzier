/*
     This API will send a url to registered email so that user/company can change password
*/

var user=require('../models/UserSchema')
var company=require('../models/TestAdminSchema')
var sendMail=require('./sendMail')
var btoa=require('btoa')

exports.forgetPasswordMail=(req,res)=>{
    if(!req.body.person||!req.body.email){             //   person value is received from front end by switching company/user tabs
        res.json({
            success:false,
            msg:"Please enter email"
        })
    }else{
        (req.body.person=="user"?user:company).findOne({email:req.body.email},{email:true,_id:false},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else if(data==null){
                res.json({
                    success:false,
                    msg:"This Email Id is not registered.Please enter your registered Email Id"
                })
            }else{
                link='http://localhost:4200/changePassword/'+btoa(req.body.person).replace(/=/g,"")+'/'+btoa(req.body.email).replace(/=/g,"")
                //this link is of front end
                sendMail.sendMail(data.email,link)      // link is the URL that is send to email ID for changing password
                res.json({
                    success:true,
                    msg:"An URL is sent on this email, use that URL to change password"
                })       
            }
        })
    }
}