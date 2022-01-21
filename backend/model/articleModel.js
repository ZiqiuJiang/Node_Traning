const { Schema } = require("mongoose");

const articleModel = new Schema({
    userid: Schema.Types.ObjectId,
    content: String,
    title: String
})

module.exports = articleModel;