const express = require("express");

const path = require("path")


let app = express();

app.listen(6789);
console.log("服务启动，6789端口");

app.get("/",(req,res)=>{
    res.sendFile( path.join(__dirname,"./static/index.html") );
});

app.get("/css/index.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"./static/css/index.css"));
});
