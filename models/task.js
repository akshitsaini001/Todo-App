import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["assigned" , "done" , "deleted" , "leaved"],
        required:true
    },
    assignedAt:{
        type:Date,
        default:Date.now
    }
});

const Task = mongoose.model("Task" , taskSchema);
export default Task;