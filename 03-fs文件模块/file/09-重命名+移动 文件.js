
//引入原生的 fs 文件模块
const fs = require("fs");

//推荐使用path来做路径处理
const path = require("path");

//先处理路径
let oldPath = path.join(__dirname,"test/css/index.css");
let newPath = path.join(__dirname,"test/index.css");

//移动文件
fs.rename(oldPath,newPath,(err)=>{if(err)throw err});