
const {URL} = require("url");


let u = new URL("https://www.baidu.com:5000/s?wd=%E9%98%BF%E9%A3%9E&rsv_spt=1&rsv_iqid=0xff5b8704000c0409&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=9&rsv_sug1=2&rsv_sug7=100&rsv_sug2=0&inputT=1938&rsv_sug4=2357");

console.log(u);
console.log(u.hostname);
console.log(u.searchParams);
console.log(u.searchParams.get("f"));