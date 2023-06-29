// "eylem" routerını buraya yazın


const express = require("express");

const actionModel= require("./actions-model");
const projectModel = require("../projects/projects-model");

const router =express.Router();
const mw = require("./actions-middlware");


router.get("/", async (req, res, next) =>{
    try{
        let allUsers = await actionModel.get();
        res.json(allUsers);
    }catch(error){
        next(error);
    }
});

router.get("/:id" , mw.validateUserId , (req, res, next) => {
    try{
        res.json(req.userId);
    }catch(error){
        next(error);
    }
});


router.post("/", mw.validatePayload, mw.validateProjectID, async (req, res, next) => {
    try {
        const newAction = await actionModel.insert(req.body);
        res.status(201).json(newAction);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", mw.validateUserId, mw.validatePayload, mw.validateProjectID, async (req, res, next) => {
    try {
        const updatedAction = await actionModel.update(req.params.id, req.body);
        res.json(updatedAction);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        res.json(await actionsModel.remove(req.params.id));
    } catch (error) {
        next(error);
    }
});

module.exports = router;