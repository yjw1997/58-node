

const express = require("express");
const path = require("path")

let app = express();
//端口
app.listen(4567);

//中间件
app.use(express.static(path.join(__dirname,"./static")));

//路由监听
app.get("/teacher",(req,res)=>{
    res.send("老师介绍页");
});

app.get("/contact",(req,res)=>{
    res.send("联系我们");
});

//如果静态资源里面没有并且路由没有被监听，使用use让客服端跳转到404页面
app.use((req,res)=>{
    //重定向
    res.redirect("/404.html");
});
