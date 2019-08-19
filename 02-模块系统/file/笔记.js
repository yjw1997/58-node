/*
引入
    require()
        引入文件的时候，一定要写.路径，即使目录相同也要从./出发

    每一个文件都是一个单独的作用域，所以在引入别的文件的时候，变量是不会互相污染的


导出
    exports

    由开发者决定接受的数据的变量名

    真正导出的是 module.exports ，而 exports 和 module.exports 是引用关系

    module.exports

    exports = module.exports

 */