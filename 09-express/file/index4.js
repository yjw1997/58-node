


const express = require("express")
const path = require("path")
const request = require("request")


let app = express();

//端口
app.listen(4567);

app.use(express.static(path.join(__dirname,"./static")));

app
    .route("/goudan")
    .get((req,res)=>{

        request({
            url :"http://afei.fun:2333/api"
            ,method : "get"
            ,headers : {
                "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
            }
        },(err,res1,body)=>{
            console.log(body);
            res.send(body);
        });


    })
    .post((req,res)=>{

        request({
            url :"http://afei.fun:2333/api"
            ,method : "post"
            ,headers : {
                "user-agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
            }
        },(err,res1,body)=>{
            console.log(body);
            res.send(body);
        });

    })
