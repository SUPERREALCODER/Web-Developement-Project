import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var a;
const d = new Date();
let day = d.getDay();

if(day == 0 || day == 6)
    a="Hey it's weekend Have a fun time ";
else 
a="Hey it's weekend Have a work time ";

app.get("/",(req,res)=>{
    res.render("index.ejs",
        {Day: a}
    )
 
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
