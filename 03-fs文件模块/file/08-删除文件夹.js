
//引入原生的 fs 文件模块
const fs = require("fs");

//推荐使用path来做路径处理
const path = require("path");

//先处理路径
let p = path.join(__dirname,"test/js");


//删除文件夹
//不可以删除非空文件夹（只可以删除空文件夹）
fs.rmdir(p,(err)=>{if(err)throw err});