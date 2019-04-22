const jwt=require('jsonwebtoken');
const config =  require('config');

exports.tokenVerify=(req,res,next)=>{
    if(!req.headers['client-token']){
        res.json({
            success:false,
            msg:"You are not a authentic user"
        })
    }else{
        jwt.verify(req.headers['client-token'],config.get('jwtPrivateKey'),(err,decodedData)=>{
            if(err){
                res.json({
                    sucess:false,
                    msg:"Authentication failed"    //key is not able to decode the token properly
                })
            }else{
                req.decodedData=decodedData
                next()
            }
        })
    }
}