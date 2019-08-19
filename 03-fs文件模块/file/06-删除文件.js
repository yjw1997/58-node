
//引入原生的 fs 文件模块
const fs = require("fs");

//推荐使用path来做路径处理
const path = require("path");

//先处理路径
let p = path.join(__dirname,"test/index.css");


//删除文件
//只能删除已存在的文件，不能删文件夹
fs.unlink(p,(err)=>{if(err)throw err});