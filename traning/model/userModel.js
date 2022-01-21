const { Schema } = require("mongoose");

const userModel = new Schema({
    name: String
});

module.exports = userModel;