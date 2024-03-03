import express from "express";
const app= express();
const port =3000;
app.get("/",(req,res)=>{
   res.send("<h1>bro how much<h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>DEBA<h1>");
 });
 app.get("/contact",(req,res)=>{
    res.send("<h1>i will not give<h1>");
 });
app.listen(port,()=>{
    console.log('server is running');
});