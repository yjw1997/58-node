
const express = require("express");

let app = express();

app.listen(1234);

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/teacher",(req,res)=>{
    res.render("teacher");
});
app.get("/course",(req,res)=>{
    res.render("course");
});

