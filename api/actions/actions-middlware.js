// eylemlerle ilgili ara katman yazılımları yazın

const e = require("express");
const actionModel = require("./actions-model");


async function validateUserId (req,res,next) {
    try {
        const userId = req.params.userId;
        const user = await actionModel.findUserById(userId);
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

function validatePayload (req , res ,next) {
    try{
        let {name , email } = req.body;
        if(!name || !email) {
            res.status(400).json({message:"Girilen bilgileri kontrol ediniz"})
        }else{
            next();
        }
    }catch(err){
        next(err);
    }
}



async function validateProjectID(req, res, next) {
    try {

        let id  = req.body.project_id;
        let valid = await projectModel.get(id);
        if (!valid) {
            res.status(400).json({ message: "Verdiğiniz proje ID'si mevcut değil..." })
        }
        else {
            next()
        }
    } catch (error) {
        next(error)
    }
}