<template>
  <div class="container">
    <el-button class="postArticle" type="primary">Post Article</el-button>
    <div class="articles">
      <div class="article" v-for="item in articleList" :key="item.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{ item.title }}</span>
            <el-button @click="getComment(item._id)" style="float: right; padding: 3px 0" type="text"
              >Comment</el-button
            >
          </div>
          <div class="text item">
            {{item.content}}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllActicle } from "../../request";
export default {
  name: "showArticle",
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    getArticle() {
      getAllActicle().then(res => {
        this.articleList = res
      })
    },
    getComment(articleid) {
      console.log(articleid);
    },
    postArticle(userid,title,content) {

    }
  },
  mounted() {
    this.getArticle()
  }
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
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}
.article {
  flex: 0.3;
}

.postArticle{
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>