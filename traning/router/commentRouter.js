const express = require("express");
const router = express.Router();
const commentSchema = require("../model/commentModel");
const coon = require("../dbConfig");
const Comment = coon.model("comment", commentSchema, "comment");

router.get("/get", async (req, res) => {
    let { userid, articleid } = req.query;
    let result = await Comment.find({ $or: [{ articleid }, { userid }] }).exec();
    if (result.length != 0) {
        res.send({
            msg: "Get success",
            data: result
        })
    } else {
        res.send({
            msg: "Get fail"
        })
    }
});

router.post("/post", async (req, res) => {
    let { articleid, userid, content } = req.query
    // console.log(articleid,userid,comment);
    if (articleid && userid && content) {
        const saveData = new Comment({
            userid: userid,
            articleid: articleid,
            content: content
        })
        let result = await saveData.save();
        if (result) {
            res.send("comment post success")
        } else {
            res.send("comment post fail")
        }
    } else {
        res.send("Missing necessary information")
    }
});

module.exports = router;