import express from 'express';
import Task from '../models/task.js';

const router = express.Router();


//To see all tasks
router.get("/task" , async(req , res)=>{
    let tasks = await Task.find({});
    res.render("task.ejs" , {tasks});
});

//To add new task
router.post("/new" , async(req , res)=>{
    let {task} = req.body;
    const newTask = new Task({
        task: task
    })

    await newTask.save();
    console.log(newTask)
    res.redirect("/task");
})
export default router;