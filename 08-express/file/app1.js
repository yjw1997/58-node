
const express = require("express");

let app = express();


//中间件
app.use(require('./middleware/mid'));


//路由监听
app.get("/",require("./router/index"));
app.get("/teacher",require("./router/teacher"));


//端口
app.listen(7777);
console.log("服务启动，端口7777");