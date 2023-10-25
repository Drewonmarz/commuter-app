const express = require ('express');
const router = express.Router();
const user = require('../models/user');


router.post('/',async (req ,res) =>{
    try{
        const user = new Schedule(req, body);
        const newUser = await user.save();
        res.status(201).json({error: error.message});
    }catch (error){
        res.status(400).json({error:error.message})
    }
})


module.export = router;