
/*
* 引入
* 连接数据库
* 建立表规则Schema
*       - type
*       - required
*       - default
* 建表
 */

//引入
const  mongoose = require("mongoose")

//连接数据库
// 地址 ： mongodb://localhost:27017/数据库名
mongoose
    .connect("mongodb://localhost:27017/goudan" , { useNewUrlParser: true } )
    .then(()=>{
        console.log("数据库连接成功");
    })
    .catch((err)=>{
        console.log("数据库连接失败");
        console.log(err);
    });

//建表之前 - 建立表的规则Schema
//创建一个规则（比如说我们准备创建一个user表，那么我们先建立一个user表规则，名字随便起，为了见名知意我们叫做 userSchema）
const Schema = mongoose.Schema;
let userSchema = new Schema({
    name : {type:String,required:true},
    pwd : {type:String,required:true},
    status : {type:String,default:"这个人很懒，什么都没有留下~"},
    marry : Boolean
});

//建表
const user = mongoose.model("user",userSchema);

//存储数据 ， 实际项目中，不可能在建表之后立马在当前文件中存储数据
module.exports = user;
