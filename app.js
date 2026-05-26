import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import Task from './models/task.js';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 8080;

app.set('view engine' ,  'ejs');
app.set("views", path.join(__dirname , "/views"));
app.use(express.static(path.join(__dirname , "public")));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



main()
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoApp');

}

import router from './router/routes.js';
app.use("" , router);

app.listen(port , ()=>{
    console.log(`App is listening on the port ${port}.`)
});
