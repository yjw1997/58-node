

const express = require("express");

//创建应用
let app = express()

//监听端口
app.listen(4567)

//加载模板引擎
app.set("view engine" , "ejs");

//监听路由
app.get("/teacher",(req,res)=>{

    /*
    返回ejs模板文件
        一般使用相对路径指定文件
        默认去 views 文件夹里面查找对应的文件
     */
    res.render("teacher");

});
