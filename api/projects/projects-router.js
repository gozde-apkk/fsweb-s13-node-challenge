// "project" routerını buraya yazın!

const express = require("express");

const projectModel= require("./projects-model");

const router = expres.Router();

router.get("/", async(req,res,next) =>{
    try{
        const allProjects = await projectModel.get();
        res.json(allProjects);
     }catch(error){
        next(error);
     }})

router.get("/:id", mw.validateUserId, async (req, res, next) => {
        try {
            res.json(req.existUser);
        } catch (error) {
            next(error);
        }
    });


router.post("/", mw.validatePayload, async (req, res, next) => {
        try {
            const newProject = await projectModel.insert(req.body);
            res.status(201).json(newProject);
        } catch (error) {
            next(error);
        }
    });

 router.put("/:id", mw.validatePayload, mw.validateUserId, async (req, res, next) => {
        try {
            const updatedProject = await projectModel.update(req.params.id, req.body);
            res.json(updatedProject);
        } catch (error) {
            next(error);
        }
    });

router.delete("/:id", mw.validateUserId, async (req, res, next) => {
        try {
            res.json(await projectModel.remove(req.params.id));
        } catch (error) {
            next(error);
        }
    });
    


router.get("/:id/actions", mw.validateID, async (req, res, next) => {
        try {
            const actions = await projectsModel.getProjectActions(req.params.id)
            res.json(actions);
        } catch (error) {
            next(error);
        }
    });
    
    module.exports = router;