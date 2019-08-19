
const request = require("request");

const fs = require("fs");
const path = require("path");

request(
    {
        "method" : "GET"
        ,"url" : "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&pn=0&rn=1&gsm=3c&1563458322372="
        ,"headers" : {
            "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
        }
    }
    ,(err,res,body)=>{
        if(err)throw err;

        /*console.log(JSON.parse(body));*/
        // console.log(body);

        //let reg = /http:\/\/img\d+\.imgtn\.bdimg\.com\/it\/[\da-z=,&]+\.(jpg|png|gif)/gi;
        let reg = /https?:\/\/.+?\.(jpg|png|gif)/gi;
        let imgArr = body.match(reg);
        if ( !imgArr ) return;
        imgArr = [...new Set(imgArr)];

        // console.log(imgArr,imgArr.length);

        imgArr.forEach((url,i)=>{

            request(url)
                .pipe( fs.createWriteStream(path.join(__dirname,"img/"+i+".jpg")) );

        });

    }
);
