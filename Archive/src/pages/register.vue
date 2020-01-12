<template>
  <div class="register_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Start the Journey</div>
      <div class="register_flexbox">
        <section class="register_left_block">
          <div class="auth_label">Name</div>
          <el-input></el-input>
          <el-button class="auth_button">Next</el-button>
        </section>
        <section class="register_right_block">
          <el-button type="primary" style="display: block; width: 100%;"
            >Register Via Facebook</el-button
          >
          <el-button
            type="primary"
            style="display: block; width: 100%; margin:10px 0;"
            >Register Via Facebook</el-button
          >
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "register",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  components: { Nav }
};
</script>

<style scoped>
.register_container {
  height: 100vh;
  overflow: hidden;

  background-size: cover;
}
.register_left_block {
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #eee;
  width: 50%;
  padding-right: 10px;
}
.register_right_block {
  width: 50%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.register_flexbox {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.2px;
  line-height: 1.4;
}
.auth_label {
  margin: 10px 0;
}
.auth_button {
  margin-top: 20px;
  background-color: rgb(79, 101, 241);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  height: 44px;
  letter-spacing: 1px;
  line-height: inherit;
  text-transform: uppercase;
  width: 100%;
  box-shadow: rgb(67, 81, 232) 0px 0px 0px 0px inset,
    rgba(79, 101, 241, 0.15) 0px 7px 12px -2px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 4px;
  padding: 9px 20px;
  text-decoration: none;
}
@media screen and (max-width: 765px) {
  .register_flexbox {
    display: block;
  }
  .register_left_block {
    padding: 0;
    border-width: 0;
    width: 100%;
  }
  .register_right_block {
    margin-top: 20px;
    padding: 0;
    width: 100%;
  }
}
</style>
