
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")})

//表规则
let userSchema = new mongoose.Schema({
    user : {
        type:String
        ,required:[true,"user字段是必须的"]
    }
});

//表
let user = mongoose.model("user",userSchema);

user.create({
    user : "afei",
    pwd : "123456"
})

