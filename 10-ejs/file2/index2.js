

const express = require("express");

//创建应用
let app = express()

//监听端口
app.listen(4567)

//加载模板引擎
app.set("view engine" , "ejs");

//监听路由
app.get("/teacher/:name.html",(req,res)=>{

    //假设这里的数据来自于数据库
    let data = {
        afei : {
            name : "阿飞"
            ,age : 18
            ,sex : 1
            ,dec : "阿飞老师是一位非常刚正不阿的好老师。"
        }
        ,yinshi : {
            name : "银时"
            ,age : 38
            ,sex : 1
            ,dec : "银时老师是一位大佬。"
        }
        ,yanxin : {
            name : "言心"
            ,age : 20
            ,sex : 0
            ,dec : "言心老师是个小可爱。"
        }
    };

    let teacherData = {
        "data" : data[req.params.name]
    };
    // let teacherData = data[req.params.name];

    res.render("teacher2" , teacherData);

});
