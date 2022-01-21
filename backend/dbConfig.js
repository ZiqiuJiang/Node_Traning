const mongoose = require("mongoose");
const coon = mongoose.createConnection("mongodb://localhost:27017/traning");

module.exports = coon;