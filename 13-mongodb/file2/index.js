
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/afei",{ useNewUrlParser: true })
    .then(()=>{console.log("链接成功")})
    .catch(()=>{console.log("链接失败")});


let user = require("./model/user");
let article = require("./model/article");

article.find({}).populate("author").then(data=>{
    console.log(data);
});



/*user.create(
    {user:"afei",pwd:"123456"},
    {user:"wulv",pwd:"sdgsdfg"},
    {user:"yinshi",pwd:"dgSghh"},
    {user:"yanxin",pwd:"ASFAF"}
);*/


/*article.create(
    {
        title : "这是我第一篇文章"
        ,author : "5d42f0c43b9ef32370da7b67"
        ,content : "真的很开心，明天就可以开始实战了！"
    }
    ,{
        title : "文章2"
        ,author : "5d42f0c43b9ef32370da7b66"
        ,content : "我哭了你呢。我哭了你呢。"
    }
);*/




