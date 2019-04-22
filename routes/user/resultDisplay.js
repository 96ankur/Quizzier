var resultSchema=require('../../models/ResultSchema')

exports.resultDisplay=(req,res)=>{
    if(!req.body._id){
        res.json({
            success:false,
            msg:"id not found"
        })
    }else{
        resultSchema.findById(req.body._id,{results:true,_id:false},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'Something went wrong'
                })
            }else{
                res.json({
                    success:true,
                    result:data.results
                })
            }
        })
    }
    
}