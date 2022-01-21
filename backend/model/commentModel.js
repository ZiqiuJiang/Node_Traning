const { Schema } = require("mongoose");

const commentModel = new Schema({
    userid: Schema.Types.ObjectId,
    articleid: Schema.Types.ObjectId,
    content: String
});

module.exports = commentModel;