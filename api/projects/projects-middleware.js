// projects ara yazılımları buraya


const projectModel = require("../projects/projects-model");

async function validateUserId(req,res,next) {
    try{
        let existUser = await projectModel.get(req.params.id);
        if(!existUser){
            res.status(404).json({
                message:"Proje bulunamadı....."
            })
        }else{
            req.existUser = existUser;
        }
    }catch(error){
        next(error);
    }
}


function validatePayload (req , res, next){
    try{
        let {name, description} = req.body;
        if(!name || !description){
            res.status(400).json({message:"Eksik alanları kontrol ediniz"});
        }else{
            next();
        }
    }catch(error){
        next(error);
    }
}


module.exports = {validatePayload,validateUserId};

