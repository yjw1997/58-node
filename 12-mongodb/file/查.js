
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
//查
/*
find findOne findById

Model.find( conditions, [projection], [options], [callback] );
    conditions 查询条件
    projection 返回的内容选项
    options 查询配置选项
    callback 回调函数，err data，可以使用Promise代替


conditions 查询条件
    基础条件 {}
 */

/*user.find(
    {user : "afei"}
    ,(err,data)=>{
        console.log(data);
    }
)*/

/*user.find(
    {age : 18}
    ,(err,data)=>{
        console.log(data);
    }
)*/

/*user.find(
    {age : {$lte:30}}
    ,(err,data)=>{
        console.log(data);
    }
)*/

/*user.find(
    {$nor:[{user:"afei"},{age:38}]}
).then(data=>{
    console.log(data);
});*/

/*user.find(
    {user:{$in:["afei","wulv"]}}
).then(data=>{
    console.log(data);
});*/

/*user.find(
    {$where : "this.age+2 === 20"}
).then(data=>{
    console.log(data);
});*/

/*user.find(
    {user : /[ye]/}
).then(data=>{
    console.log(data);
});*/

/*user.find(
    {
        user : /[ye]/
        ,age : {$gte:20,$lte:40}
    }
).then(data=>{
    console.log(data);
});*/

/*user.find(
    {
        age : {$exists:true}
    }
).then(data=>{
    console.log(data);
});*/

/*user.where("age").exists(true).exec((err,data)=>{
    console.log(data);
});*/
user.where("age").gte(80).exec((err,data)=>{
    // console.log(data);
    console.log(data.length);
});








