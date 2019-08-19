/*

 /teacher/afei 的子路由

*/

const express = require("express");

let router = express.Router();

router.get("/",(req,res)=>{
    res.send("这里放着afei的作品！");
});

router.get("/web",(req,res)=>{
    res.send("这是阿飞老师的web作品。")
});
router.get("/java",(req,res)=>{
    res.send("这是阿飞老师的java作品。")
});
router.get("/python",(req,res)=>{
    res.send("这是阿飞老师的python作品。")
});

module.exports = router;
