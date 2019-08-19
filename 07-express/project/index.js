
const express = require("express");
// console.log(express);

// 执行express，创建一个应用
let app = express();

// 监听端口
app.listen(2333);

//监听请求，对应的给客户端返回数据
//根路由
app.get("/",(req,res)=>{

    // console.log("访问了我的服务！");

    //给客户端返回内容
    res.send(`
<!DOCTYPE HTML>
<html>
<head>
    <title>Hello Express!</title>
</head>
<body>
<h1>开始学习express啦！</h1>
</body>
</html>    
    
    `);

});