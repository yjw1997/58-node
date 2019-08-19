
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")})


let userSchema = new mongoose.Schema({
    user : String
    ,pwd : String
    ,age : Number
});

//定义钩子
userSchema.pre("find",function (next) {
    console.log("find执行之前，先执行这里");
    next();
});
userSchema.post("find",function (data) {
    console.log("find执行之后，会执行一次这里");
    console.log(data);
});




let user = mongoose.model("user",userSchema);
user.find(
    {user:{$exists:true}}
    ,(err,data)=>{
        console.log("find本身的回调");
    }
);


