import express from 'express';
import Task from '../models/task.js';

const router = express.Router();


//To see all tasks
router.get("/task" , async(req , res)=>{
    let tasks = await Task.find({});
    res.render("task.ejs" , {tasks});
});

export default router;