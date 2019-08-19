


const express = require("express");
const path = require("path")

let app = express();
//端口
app.listen(4567);

//监听路由
app
    .route("/")
    .get((req,res)=>{
        res.send("get");
    })
    .post((req,res)=>{
        res.send("post");
    });
/*
//上面代码等价于：
app.get("/",(req,res)=>{
    res.send("get");
});
app.post("/",(req,res)=>{
    res.send("post");
});
*/


