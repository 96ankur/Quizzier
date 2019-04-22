var dbTestDetails=require('../../models/TestSchema')

exports.createdQuiz=(req,res)=>{
    dbTestDetails.find({companyName:req.decodedData.companyName},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"there is no created test"
            })
        }else if(data.length==0){
            res.json({
                success:true,
                msg:"QUIZ IS NOT CREATED YET"
            })
        }else{
            res.json({
                success:true,
                data:data
            })
        }
    }) 
}