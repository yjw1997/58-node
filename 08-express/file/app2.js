
const express = require("express");

let app = express();

//端口
app.listen(7777);
console.log("服务启动，端口7777");


//其实所有的路由监听api都是一个中间件
app.get("/",(req,res,next)=>{
    res.afei = "阿飞";

    next();
});
app.get("/",(req,res)=>{
    res.send(res.afei+"老师");
});


app.get("/teacher",(req,res)=>{
    res.send(res.afei+"teacher");
});