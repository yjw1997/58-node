
const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")})


let userSchema = new mongoose.Schema({
    user : {
        type : String,
        validate : {
            validator : value => {
                if((/[A-Z]/.test(value)+ /[a-z]/.test(value)+ /_/.test(value)+ /\d/.test(value))>=2){
                    return /^\w{6,18}$/.test(value);
                }else{
                    return false;
                }
            }
        }
    }
});

let user = mongoose.model("user",userSchema);

user.create({
    user : "a123456"
})
