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

//To see completed tasks
router.get("/task/completed" , async(req , res)=>{
    const tasks =  await Task.find({status:"done"});
    res.render("completed.ejs" , {tasks});
})

//To reassign task
router.put("/reassign/:id" , async(req , res)=>{
    const {id} = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id , {status:"assigned"});
    res.redirect("/task/completed");
})
export default router;