
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
        ,info : {
            age : Number
            ,sex : String
            ,status : String
        }
        ,arr : []
    }
    ,{
        //去掉默认的 _v 字段
        versionKey : false
    }
);

//建表
let user = mongoose.model("user",userSchema);


//测试
//改
/*user.updateOne(
    {user:"afei"}
    ,{age : 10}
).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})*/


// user.deleteMany({}).then(()=>{})
/*user.create(
    {
        user : "afei"
        ,pwd : "123456"
    }
    ,{
        user : "wulv"
        ,pwd : "123456"
        ,info : {
            age : 20
        }
    }
    ,{
        user : "zhaoge"
        ,pwd : "789456"
        ,info : {
            age : 20,
            sex : "男"
        }
    }
)*/

/*user.create(
    {
        user : "afei"
        ,pwd : "123456"
        ,arr : [1,2]
    }
)*/

/*
user.updateOne(
    {user:"zhaoge"}
    ,{info:{sex:"女"}} //这样写会覆盖info
    ,err=>{}
)
*/

/*user.updateOne(
    {user:"zhaoge"}
    ,{$set:{"info.sex":"女"}}
    ,err=>{}
)*/

/*user.updateOne(
    {user:"afei"}
    ,{$push:{arr:3}}
    ,()=>{}
)*/

/*user.updateOne(
    {user:"afei"}
    ,{$set:{"arr.0":999}}
    ,()=>{}
)*/
/*user.updateOne(
    {user:"afei"}
    ,{
        $push:{
            arr:{$each:[7,8,9]}
        }
    }
    ,()=>{}
)*/
/*user.updateOne(
    {user:"afei"}
    ,{
        $push:{
            arr:{$each:[],$slice:-3}
        }
    }
    ,()=>{}
)*/

/*user.updateOne(
    {user:"afei"}
    ,{
        $addToSet:{
            arr : 99
        }
    }
    ,()=>{}
)*/

/*user.updateOne(
    {user:"afei"}
    ,{
        $pop : {arr:-1}
    }
    ,()=>{}
)*/

/*user.updateOne(
    {user:"afei"}
    ,{
        $pull : {
            arr : 10
        }
    }
    ,()=>{}
)*/





