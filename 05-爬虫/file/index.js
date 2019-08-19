
const request = require("request");

const fs = require("fs");
const path = require("path");

// console.log(request);

/*

request 基础使用：
    两个参数，第一个是配置请求相关的信息，第二个是回调函数

    回调函数有三个形参，
        第一个err错误对象，
        第二个res响应相关的信息，
        第三个body请求返回的数据

 */

request(
    {
        "method" : "GET"
        ,"url" : "https://search.jd.com/Search?keyword=%E6%BD%AD%E5%B7%9E%E6%95%99%E8%82%B2&enc=utf-8&wq=%E6%BD%AD%E5%B7%9Ejiaoyu"
        ,"headers" : {
            "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
        }
    }
    ,(err,res,body)=>{
        if(err)throw err;
        // console.log(body);
        //fs.writeFile(path.join(__dirname,"test/1.html"),body,(err)=>{if(err)throw err});

    }
);