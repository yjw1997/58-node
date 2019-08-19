
/*
express 重点整理
    * 安装
    * 基础服务的搭建
        - 引入express
        - 执行express创建应用
        - 监听端口
            - 本地测试 默认协议与ip  http://127.0.0.1
            - 服务购买之后，有对应的公网 ip
            - 本地测试的端口尽量选择2000以上
            - 服务器端口 http默认80  https默认443
        - 监听路由
            - req和res的介绍
            - 返回客户端res.send() res.sendFile()
    * 中间件
        - use方法 、分开不同文件的写法
    * 子路由
        - use方法 、express.Router()
    * 各种监听路由的方式
        - app.get
        - app.post
        - app.all（所有请求类型）
        - app.route
    * 数据的接收
        - 如果有数据的传输，需要提前引入两个处理数据的中间件express.json() express.urlencoded()
        - req.body
        - req.query
        - {...req.body,...req.query}
    * 静态资源
        - 默认中间件配置静态资源文件 express.static()
    * 404处理
        - 重定向
        - 端口最后面对404的监听
    * params数据
        - 处理同一种类页面的方式
    * 跨域
        - 用request代理
        - 在请求的后端设置里面加上  "Access-Control-Allow-Origin" : "允许的源"


    * cookie
        - 项目实战的时候结合实例来讲解



 */

/*
const express = require("express")
let app = express();
app.listen(7878)
app.get("/",(req,res)=>{

})*/
