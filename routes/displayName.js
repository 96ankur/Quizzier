var userSchema=require('../models/UserSchema')
var companySchema=require('../models/TestAdminSchema')

exports.displayName=(req,res)=>{
    ((req.body.person=='user')?userSchema:companySchema).findOne({email:req.decodedData.email},
                                                    {userName:true,companyName:true,_id:false},(err,data)=>{
        if(err){
            console.log('ankur')
            res.json({
                success:false,
                msg:'something went wrong'
            })
        }else{
            res.json({
                success:true,
                data:data
            })
        }
    })
}