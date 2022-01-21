const express = require("express");
let router = express.Router();
const userSchema = require("../model/userModel");
const articleSchema = require('../model/articleModel');
const commentSchema = require('../model/commentModel');
const coon = require("../dbConfig");
const User = coon.model("user", userSchema, "user");
const Article = coon.model("article", articleSchema, "article");
const Comment = coon.model("comment", commentSchema, "comment");

router.get("/get", async (req, res) => {
    let userid = req.query.userid
    console.log(userid);
    if (userid) {
        let user_res = await User.find({ _id: userid }).exec()
        let article_res = await Article.find({ userid }).exec()
        let comment_res = await Comment.find({ userid }).exec()
        res.send({
            msg: 'Get success',
            data: {
                user: user_res,
                article: article_res,
                comment: comment_res
            }
        })
    } else {
        let user_res = await User.find({}).exec()
        // console.log(user_res);
        res.send({
            msg: 'Get success',
            data: {
                user: user_res,
            }
        })
    }
})

router.get("/login", async (req, res) => {
    let name = req.query.username
    let password = req.query.password
    console.log(name);
    console.log(password);

    let user_res = await User.find({ name: name,password: password }).exec()
    res.send({
        msg: 'Get success',
        data: {
            res: user_res,
        }
    })

})

module.exports = router;