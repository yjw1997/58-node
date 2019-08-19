
const request = require("request");

request(
    {
        "method" : "GET"
        ,"url" : "https://search.jd.com/Search?keyword=%E6%BD%AD%E5%B7%9E%E6%95%99%E8%82%B2&enc=utf-8&wq=%E6%BD%AD%E5%B7%9Ejiaoyu"
        ,"headers" : {
            "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
        }
    }
    ,(err,res,body)=>{
        if(err)throw err;

        let reg = /\/\/img\d+\.360buyimg\.com[\da-z\/]+\.(jpg|png|gif)/gi;

        console.log(body.match(reg));

    }
);

/*
//img10.360buyimg.com/n7/jfs/t1/62750/28/2509/428162/5d0c8657Ed1acdd73/a12726821cfbefb9.jpg
//img13.360buyimg.com/n7/jfs/t1/64126/34/2553/274272/5d0c96c5Ec3b7ad04/c6885d8613af009f.jpg
//img10.360buyimg.com/n7/jfs/t1/25663/12/6539/288954/5c529e53E1bdc5d6d/3ba7524db04c7d21.jpg
//img12.360buyimg.com/n7/jfs/t1/28497/21/6422/373426/5c528df6E3ce8c2b9/f3f083c220816034.jpg
 */