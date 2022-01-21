const Express = require("express");
const app = new Express();
const bodyParser = require("body-parser")

require("dotenv").config({path:".env"})
const port = process.env.PORT || 8080;

const articleRouter = require("./router/articleRouter");
const commentRouter = require("./router/commentRouter");
const userRouter = require("./router/userRouter");

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.use(bodyParser.json());
app.use("/article", articleRouter);
app.use("/comment", commentRouter);
app.use("/user", userRouter);

app.get("/",(req,res)=>{
    res.send("test api")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})