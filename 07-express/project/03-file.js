
const express = require("express");
// console.log(express);

// 执行express，创建一个应用
let app = express();

// 监听端口
app.listen(2333);
console.log("服务启动成功，监听端口：2333");

//监听请求，对应的给客户端返回数据
//根路由
app.get("/",(req,res)=>{



    // res.status(888);
    res.sendFile(__dirname+"/public/index.html");


});