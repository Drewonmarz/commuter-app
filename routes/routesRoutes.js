const express = require ('express');
const router = express.Router();
const route = require('../models/routes');


router.post('/',async (req ,res) =>{
    try{
        const route = new Route(req, body);
        const newRoute = await route.save();
        res.status(201).json({error: error.message});
    }catch (error){
        res.status(400).json({error:error.message})
    }
})


module.export = router;
