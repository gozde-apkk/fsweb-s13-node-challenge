const express = require('express');
const server = express();

// Sunucunuzu yapılandırın

server.use(express.json());
const actionRouter = require("./actions/actions-router");
const projectRouter=require("./projects/projects-router");


// Eylem routerınızı /api/actions/actions-router.js içinde oluşturun
// Proje roterlarınızı /api/projects/projects-router.js içinde oluşturun
// Bu dosyanın içinde `server.listen()` YAPMAYIN!
server.get("/", (req,res) =>{
    res.send("Node App working on port ...")
}
)
module.exports = server;
