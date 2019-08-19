
const express = require("express")
let app =express()
app.listen(4567)
app.use(express.static(__dirname+"/static"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//加载mongoose的表
const user = require("./model/user")

app.post("/regist",(req,res)=>{
    let data = {...req.body,...req.query};
    console.log(data);
    //处理data，将它变成符合表规则的数据
    let userData = {
        name : data.user,
        pwd : data.password,
        status : data.status
    }

    //将数据存储到表中  增
    user.create(userData);

    res.send("注册成功！");
})
