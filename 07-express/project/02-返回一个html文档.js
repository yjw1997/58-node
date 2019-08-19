
const express = require("express");
const fs = require("fs");
const path = require("path");
// console.log(express);

// 执行express，创建一个应用
let app = express();

// 监听端口
app.listen(2333);
console.log("服务启动成功，监听端口：2333");

//监听请求，对应的给客户端返回数据
//根路由
app.get("/",(req,res)=>{

    //读取html文件并返回
    let p = path.join(__dirname,"public/index.html");
    fs.readFile(p,"utf8",(err,data)=>{
        if ( err )throw err;

        //返回
        res.send(data);
    });

});