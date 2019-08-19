
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
//增
user.create(
    {
        user : "afei"
        ,pwd : "123456"
        ,age : 18
    }
    ,{
        user : "wulv"
        ,pwd : "123456"
        ,age : 20
    }
    ,{
        user : "yanxin"
        ,pwd : "adfgh"
        ,age : 38
    }
    ,{
        user : "zhaoge"
        ,pwd : "123456"
        ,age : 18
    }
    ,{
        user : "wula"
        ,pwd : "123456"
        ,age : 40
    }
    ,{
        user : "yinshi"
        ,pwd : "adfgh"
        ,age : 38
    }
);

