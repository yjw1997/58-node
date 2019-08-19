
const express = require("express");

let app = express();

//端口
app.listen(7777);
console.log("服务启动，端口7777");


//监听路由
app.use("/teacher",require("./routers/teacher"));





/*
app.get("/teacherteacherteacherteacherteacherteacher",(req,res)=>{
    res.send("Teacher 根路由");
});
app.get("/teacherteacherteacherteacherteacherteacher/afei",(req,res)=>{
    res.send("阿飞老师的页面。");
});
app.get("/teacherteacherteacherteacherteacherteacher/wulv",(req,res)=>{
    res.send("无虑老师的页面。");
});
app.get("/teacherteacherteacherteacherteacherteacher/wula",(req,res)=>{
    res.send("乌拉老师的页面。");
});
app.get("/teacherteacherteacherteacherteacherteacher/zhaoge",(req,res)=>{
    res.send("朝歌老师的页面。");
});
//……*/
