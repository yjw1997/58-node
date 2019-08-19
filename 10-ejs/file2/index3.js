

const express = require("express");

//创建应用
let app = express()

//监听端口
app.listen(4567)

//加载模板引擎
app.set("view engine" , "ejs");

//监听路由
app.get("/teacher",(req,res)=>{

    //假设这里的数据来自于数据库
    let data = [
        {name:"阿飞",age:19,sex:1}
        ,{name:"银时",age:38,sex:1}
        ,{name:"无虑",age:28,sex:1}
        ,{name:"乌拉",age:42,sex:0}
        ,{name:"言心",age:26,sex:0}
    ];


    res.render( "teacher3" , {data} );

});
