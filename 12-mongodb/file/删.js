
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/goudan" , {useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");
    })
    .catch(()=>{
        console.log("数据库连接失败");
    });

//Schema
let userSchema = new mongoose.Schema(
    //指定各个字段
    {
        user : {type:String,required:true}
        ,pwd : {type:String,required:true}
        ,age : Number
    }
    ,{
        //去掉默认的 _v 字段
        versionKey : false
    }
);

//建表
let user = mongoose.model("user",userSchema);


//测试
//删
//remove 已经被遗弃了， 用 deleteOne   deleteMany来代替
/*user.remove(
    //第一个参数是一个查找条件
    {user:"afei"}
    //必须要一个回调函数来接收错误对象
    ,(err)=>{if(err)throw err}
);*/

/*user.deleteMany(
    {age:38}
    ,err => {if(err)throw err}
);*/

/*user
    .deleteOne({_id:"5d403d7fa8be501ab0bcdc40"})
    .then(()=>{console.log("删除成功")})
    .catch(err=>{if (err)throw err});*/

user.deleteOne(
    {pwd:"123456",age:18}
).catch(err => {})


