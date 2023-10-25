const express = require ('express');
const router = express.Router();
const schedule = require('../models/Schedule');
const Schedule = require('../models/Schedule');

router.post('/',async (req ,res) =>{
    try{
        const schedule = new Schedule(req, body);
        const newSchedule = await schedule.save();
        res.status(201).json({error: error.message});
    }catch (error){
        res.status(400).json({error:error.message})
    }
})


module.export = router;