import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
const app = express();
const port = 8080;

app.set('view engine' ,  'ejs');
app.set("views", path.join(__dirname , "/views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname , "public")));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port , ()=>{
    console.log(`App is listening on the port ${port}.`)
});