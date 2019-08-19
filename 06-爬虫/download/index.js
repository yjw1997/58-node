
const request = require("request");
const fs = require("fs");
const PATH = require("path");

function m({word,num,path}){

    //处理不满足规则的情况
    if(!word)return;
    //处理接收的参数
    num = parseInt(num);

    let i = 0;
    while(num>0){
        req({
            word,
            path,
            pn : i*60,
            rn : Math.min(num,60)
        });

        i++;
        num -= 60;
    }


}

function req({word,path,pn,rn}){
    request(
        {
            "url" : `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=${encodeURI(word)}&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=${encodeURI(word)}&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&pn=${pn}&rn=${rn}&gsm=3c&${new Date().getTime()}=`
            ,"headers" : {
                "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
            }
        }
        ,(err,res,body)=>{
            if(err)return;

            let {data} = JSON.parse(body);

            // let data = [...new Set(body.match(/https?:\/\/.+?\.(jpg|png|gif)/gi))];

            data.forEach((item,i)=>{
                //得到url并判断
                let url = item.thumbURL;
                if(!url)return;

                //得到一个不重复的图片名
                let imgName = (("" + Math.ceil(Math.random()*100000)+i)*1).toString(16);

                //继续请求，以保存数据
                // console.log(url);
                request(url,err=>{})
                    .pipe( fs.createWriteStream(PATH.join(path,imgName+".jpg")));
            });
        }
    );
}

module.exports = m;



/*if ( num <= 60 ){
       req({
           word
           ,pn : 0
           ,rn : num
       });
   } else{
       //先确定要发送几次请求
       let c = Math.ceil(num/60);

       for(let i = 0; i < c; i++) {
           req({
               word
               ,pn : i*60
               // ,rn : (i===c-1)?(num-i*60):60
               ,rn : Math.min(num-i*60,60)
           });
       }
   }*/
