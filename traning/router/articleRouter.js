const express = require("express");
let router = express.Router();
const articleSchema = require("../model/articleModel");
const coon = require("../dbConfig");
const Article = coon.model("article", articleSchema, "article");

router.get("/get", async (req, res) => {
    let { articleid, title } = req.query;
    if (articleid || title) { // 精准查询
        let result = await Article.find({ $or: [{ articleid }, { title }] }).exec();
        res.send(result)
    } else { // 全部查询
        let result = await Article.find({}).exec();
        res.send(result)
    }
})

router.post("/post", async (req, res) => {
    let { userid, title, content } = req.query
    if (userid && title && content) {
        const saveData = new Article({
            userid: userid,
            title: title,
            content: content
        })
        console.log(saveData);
        let result = await saveData.save();
        if (result) {
            console.log(result)
            res.send("article post success")
        } else {
            res.send("article post fail")
        }
    } else {
        res.send("Missing necessary information")
    }
})

module.exports = router;