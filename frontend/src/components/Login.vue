<template>
  <div class="container">
    <div class="login_box">
      <div class="login_form">
        <el-form>
          <el-form-item label="UserName">
            <el-input v-model="user"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-button @click="login" type="primary">Login</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { Login } from "../../request";
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      Login(this.user, this.password).then((result) => {
        if (result.data.res.length != 0) {
          Message({
            type: "success",
            message: "登陆成功",
            duration: 2000,
          });
          this.$router.push("/showArticle");
        } else {
          Message({
            type: "error",
            message: "登陆失败",
            duration: 2000,
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_box {
  width: 500px;
  height: 300px;
  border: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_form {
  width: 80%;
}
</style>
