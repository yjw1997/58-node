
//引入原生的 fs 文件模块
const fs = require("fs");

//推荐使用path来做路径处理
const path = require("path");

//先处理路径
let p = path.join(__dirname,"test/2.txt");

fs.writeFile(p,"Tang大锤诬陷我！",(err)=>{if(err)throw err});