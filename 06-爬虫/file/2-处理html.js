
const request = require("request");
const cheerio = require("cheerio");


const Entities = require("html-entities").XmlEntities;
let entities = new Entities();



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

        let $ = cheerio.load(body);

        $("#new_list a.title.feed-item-link").each(function () {
            console.log(entities.decode($(this).html()));
        });
    }
);

