
/*
 req.params
 */

const express = require("express");

let app = express();

app.listen(7536);

app.get("/article/:name/:age",(req,res)=>{
    console.log(req.params);
});

