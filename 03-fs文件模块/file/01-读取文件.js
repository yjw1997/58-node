
//引入原生的 fs 文件模块
const fs = require("fs");

//推荐使用path来做路径
const path = require("path");

// console.log(fs);

//先处理路径
let p = path.join(__dirname,"test/1.txt");

// console.log(p);


/*function agoudanjax(options){
    fs.readFile(options.url,options.code,options.success);
}

agoudanjax({
    url : p
    ,code : "utf-8"
    ,success:(err,data)=>{
        if ( err )throw err;
        console.log(1);
        console.log(data);

    }
});*/

fs.readFile(p , "utf-8" ,(err,data)=>{
    if ( err )throw err;
    console.log(1);
    console.log(data);

});


console.log(2);

/*

* node的异步API都必须有回调函数
* 异步API的回调函数的第一个形参，都是错误对象
* 基本上异步API都对应的有同步API，异步名Sync

 */