

let a = 10;
let b = 20;
let c = 30;



exports = {a,b,c};
exports.x = a+b+c;

/*module.exports.a = a;
module.exports.b = b;*/

/*exports.a = a;
exports.b = b;
exports.c = c;*/

/*exports = {
    a,b,c
    /!*a:a
    ,b:b
    ,c:c*!/
};*/

//module.exports = {a,b,c};

/*
最终导出的是  module.exports
默认情况下   exports 与  module.exports 是引用关系
 */
