const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let articleSchema = new Schema({
    title : String

    ,author : {
        type : Schema.Types.ObjectId
        ,ref : "user"
    }

    ,content : String
    ,date : {
        type:Date
        ,default:Date.now()
    }
});

module.exports = mongoose.model("article",articleSchema);