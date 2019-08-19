
const request = require("request");
const {JSDOM} = require("jsdom");


request(
    {
        method : "GET"
        ,url : "https://tieba.baidu.com/index.html"
        ,headers : {
            "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
        }
    }
    ,(err,res,body)=>{
        if(err)throw err;

        //解析得到虚拟DOM
        let {window} = new JSDOM(body);
        //使用js中dom相关的操
        let aA = window.document.querySelectorAll("#new_list a.title.feed-item-link");
        //遍历取数据
        aA.forEach(item=>{
            console.log(item.innerHTML);
        });
    }
);

