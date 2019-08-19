/*

 /teacher 的子路由

*/

const express = require("express");

let router = express.Router();

router.get("/",(req,res)=>{
    res.send("Teacher路由");
});
router.get("/wulv",(req,res)=>{
    res.send("无虑老师的页面");
});

router.use("/afei",require("./afeizp"));

module.exports = router;
