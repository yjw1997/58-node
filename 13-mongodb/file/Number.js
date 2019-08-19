
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")})

//表规则
let userSchema = new mongoose.Schema({
    age : {
        type : Number,
        min : [18,"未满18岁禁止访问。"],
        max : 999
    }
});

//表
let user = mongoose.model("user",userSchema);

user.create({
    age : 17
})

