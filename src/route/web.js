import express from "express";
import homecontroller from "../controllers/homecontroller";

let router = express.Router();
let initWebRouters = (app) => {  
    
    router.get('/crud',homecontroller.getCRUD);
    router.post('/post-crud',homecontroller.postCRUD);
    router.get('/read-crud',homecontroller.displayCRUD);
    return app.use("/",router);
}

module.exports = initWebRouters;