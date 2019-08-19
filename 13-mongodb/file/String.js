
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")})

//表规则

/*
String 类型可选的验证
    enum
    minlength / maxlength
    match
 */
/*let userSchema = new mongoose.Schema({
    sex : {
        type : String
        ,enum : ["男" , "女"]
    }
});*/

/*let userSchema = new mongoose.Schema({
    pwd : {
        type : String
        ,minlength : 6
        ,maxlength : 18
    }
});*/
let userSchema = new mongoose.Schema({
    user : {
        type : String
        ,match : /^\w{6,18}$/
    }
});

//表
let user = mongoose.model("user",userSchema);

user.create({
    user : "阿飞"
})

