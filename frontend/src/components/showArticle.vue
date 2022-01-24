<template>
  <div class="container">
    <el-button class="postArticle" type="primary" @click="openArticleDialog"
      >Post Article</el-button
    >
    <div class="articles">
      <div class="article" v-for="item in articleList" :key="item.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
            <el-button
              @click="getComment(item._id)"
              style="float: right; padding: 3px 0"
              type="text"
              >Comment</el-button
            >
          </div>
          <div class="text item">
            {{ item.content }}
          </div>
        </el-card>
      </div>
    </div>
    <el-dialog
      title="Comment"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span v-for="item in commentList" :key="item._id">{{
        item.content
      }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancle</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="Post Article" :visible.sync="articleFormDialog">
      <el-form label-width="80px">
        <el-form-item label="userid">
          <el-input v-model="article.userid"></el-input>
        </el-form-item>
        <el-form-item label="title">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="content">
          <el-input v-model="article.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="articleFormDialog = false">Cancel</el-button>
        <el-button type="primary" @click="postArticle">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { getAllActicle, getComment, postArticle } from "../../request";
export default {
  name: "showArticle",
  data() {
    return {
      articleList: [],
      dialogVisible: false,
      commentList: [],
      articleFormDialog: false,
      article: {
        userid: "",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    getArticle() {
      getAllActicle().then((res) => {
        this.articleList = res;
      });
    },
    getComment(articleid) {
      console.log(articleid);
      this.dialogVisible = true;
      getComment(articleid).then((res) => {
        // console.log(res);
        console.log(res.msg);
        if (res.msg == "Get fail") {
          this.commentList = [{ content: "No Comment" }];
          console.log(this.commentList);
        }
        this.commentList = res.data;
        console.log(this.commentList);
      });
    },
    openArticleDialog() {
      this.articleFormDialog = true;
    },
    postArticle() {
      this.articleFormDialog = false;
      let { userid, title, content } = this.article;
      console.log(userid, title, content);
      postArticle(userid, title, content).then((res) => {
        if(res == 'article post success') {
          Message({
            type: "success",
            message: "Post success",
            duration: 2000,
          });
        }
      });
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.articles {
  width: 90%;
  height: 75%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.article {
  height: 200px;
  display: flex;
}

.postArticle {
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>