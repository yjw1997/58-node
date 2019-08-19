
const express = require("express");

let app = express();


//中间件
app.use((req,res,next)=>{
    //对 req/res 进行一些处理
    req.goudan = "狗蛋";

    //next执行，代表中间件函数处理完了，程序可以往下走了。
    next();
});

//监听
app.get("/",(req,res)=>{
    res.send(req.goudan);
});

app.get("/teacher",(req,res)=>{
    res.send(req.goudan+"这是Teacher路由！");
});



//端口
app.listen(7777);
console.log("服务启动，端口7777");