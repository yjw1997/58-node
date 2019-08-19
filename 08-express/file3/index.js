
const express = require("express");

let app = express();

//端口
app.listen(7777);
console.log("服务启动，端口7777");

//中间件
//这两个是默认中间件，作用是格式化数据的
app.use( express.json() );
app.use( express.urlencoded({extended:true}) );

//路由监听
app.get("/",(req,res)=>{

    console.log(req.body);
    console.log(req.query); //保存着get请求传过来的数据

    res.send("请求接收成功，接收到数据：");

});
