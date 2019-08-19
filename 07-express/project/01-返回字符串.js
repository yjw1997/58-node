
const express = require("express");
// console.log(express);

// 执行express，创建一个应用
let app = express();

// 监听端口
app.listen(2333);
console.log("服务启动成功，监听端口：2333");

//监听请求，对应的给客户端返回数据
//根路由
app.get("/",(req,res)=>{

    // console.log("访问了我的服务！");

    //给客户端返回内容
    // res.send(`阿飞！`);
    res.send([
        {name:"afei",age:18},
        {name:"wulv",age:18},
        {name:"yanxin",age:18}
    ]);
});