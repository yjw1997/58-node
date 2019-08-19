const express = require("express");

const path = require("path")


let app = express();

app.listen(6789);
console.log("服务启动，6789端口");

//中间件
//开放静态资源库的中间件
app.use(express.static(path.join(__dirname,"./static")));
req