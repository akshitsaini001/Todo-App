import express from 'express';
import Task from '../models/task.js';

const router = express.Router();


//To see all tasks
router.get("/task" , async(req , res)=>{
    let tasks = await Task.find({status:"assigned"});
    res.render("task.ejs" , {tasks});
});

//To add new task
router.post("/new" , async(req , res)=>{
    let {task} = req.body;
    const newTask = new Task({
        task: task
    })

    await newTask.save();
    res.redirect("/task");
});

//To delete task
router.put("/delete/:id" , async(req , res)=>{
    const {id} = req.params;
    const deletedTask = await Task.findByIdAndUpdate(id , {status:"deleted"});
    res.redirect("/task");
});

//To mark task as done
router.put("/done/:id" , async(req , res)=>{
    const {id} = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id , {status:"done"});
    res.redirect("/task");
});

//To mark task as leave
router.put("/leave/:id" , async(req , res)=>{
    const {id} = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id , {status:"leaved"});
    res.redirect("/task");
});
export default router;