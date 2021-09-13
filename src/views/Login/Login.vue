<template>
  <div class="login">
    <div class="loginFormWrap">
      <div class="left">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="right">
        <h2>欢迎登录!</h2>
        <div class="login-form">
          <el-form
            :model="loginForm"
            :rules="loginRules"
            ref="loginForm"
            class="form"
          >
            <el-form-item prop="user_name">
              <el-input
                prefix-icon="el-icon-user"
                v-model="loginForm.user_name"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                prefix-icon="el-icon-lock"
                type="password"
                autocomplete="off"
                v-model="loginForm.password"
                @keyup.enter.native="login('loginForm')"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                style="width: 100%"
                type="primary"
                @click="login('loginForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  @Provide() loginForm: {
    user_name: String;
    password: String;
  } = {
    user_name: "",
    password: "",
  };

  @Provide() loginRules = {
    user_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
  };

    // @Provide() errorMsg:String = errorMsg:"";
  login(formName: String): Boolean | void {
    this.$refs[formName].validate((valid) => {
        // if (valid) {
        //   let postData = this.loginForm;
        //   this.$store.dispatch("logined", postData).then((res) => {
        //     this.$router.push({
        //       path: "/index",
        //     });
        //   });
        // } else {
        //   return false;
        // }
    });
  };
}
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ccc url(~@/assets/images/login_bg.ec0334b7.png) center / cover
    no-repeat;
  .loginFormWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60em;
    display: flex;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

    .left {
      position: relative;
      width: 40%;
      background-color: #4aac7d;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .right {
      width: 60%;

      h2 {
        padding: 20px;
        border-bottom: 1px solid #26b484;
        color: #2eb185;
        font-weight: bold;
        font-size: 16px;
      }

      .login-form {
        padding: 20px 20px 40px;

        .el-alert {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
