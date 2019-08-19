const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    user : String
    ,pwd : String
});

module.exports = mongoose.model("user",userSchema);