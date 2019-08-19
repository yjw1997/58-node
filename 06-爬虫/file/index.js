
const request = require("request");
const fs = require("fs");


request(
    {
        method : "GET"
        ,url : "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&pn=10&rn=60&gsm=3c&"+new Date().getTime()+"="
        ,headers : {
            "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
        }
    }
    ,(err,res,body)=>{
        if(err)throw err;
        // console.log(body);

        let {data} = JSON.parse(body);

        console.log(data.length);

        data.forEach((item,i)=>{
            url = item.thumbURL;
            if(!url)return;

            request(url,(err)=>{}) //得到一个可读流
              .pipe( fs.createWriteStream("img/"+i+".jpg") ); //流入到可写
        });
    }
);

