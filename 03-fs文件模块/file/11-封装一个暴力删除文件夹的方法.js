
const fs = require("fs");
const PATH = require("path");

function m(path){

    let stats = fs.statSync(path);

    //是否是目录
    if ( stats.isDirectory() ){
        //得到当前文件夹里面的所有内容
        let fileList = fs.readdirSync(path);

        //如果有内容，先要删除掉里面的所有内容
        if ( fileList.length ){
            fileList.forEach(filePath=>{
                //先处理好路径，再执行删除操作
                m(PATH.join(path,filePath));
            });
        }

        //删完所有的文件/文件夹之后
        fs.rmdirSync(path);
    }

    //是否是文件
    if ( stats.isFile() ){
        fs.unlinkSync(path);
    }

}

module.exports = m;