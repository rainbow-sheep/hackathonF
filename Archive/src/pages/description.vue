<template>
  <div class="description_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Describe Yourself</div>
      <div class="description_flexbox">
        <section class="description_left_block">
          <el-input
            class="interesting"
            type="textarea"
            :rows="8"
            v-model="textarea"
          >
          </el-input>
        </section>
        <section class="description_right_block">
          <div style="display: flex; flex-direction: column">
            <el-alert
              title="Any information provided beyond this section will be public"
              type="info"
              effect="dark"
              class="alertt"
            >
            </el-alert>
            <br />
            <el-input placeholder="Facebook URL"></el-input>
            <br />
            <el-input placeholder="Github URL"></el-input>
            <div
              style="margin-top: 5px; text-align: right; color: #808080; font-size: 14px "
            >
              (Optional)
            </div>
          </div>
        </section>
      </div>
      <el-button @click="submit()" class="auth_button">Next</el-button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "description",
  methods: {
    submit() {
      console.log(this.data);
      window.location = "/#/interest";
    }
  },
  data() {
    return {
      textarea: "",
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

// .interesting:focus {
//   outline: none;
//   border-color: #409eff !important;
// }
// .interesting {
//   outline: none;
//   border-color: #fff !important;
// }
</script>

<style scoped>
.alertt {
  padding: 8px !important;
  padding-right: 16px !important;
}
.description_container {
  height: 100vh;
  overflow: hidden;
  background-image: url("/login_pic.jpg");
  background-size: cover;
}
.description_left_block {
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #eee;
  width: 50%;
  padding-right: 10px;
}
.description_right_block {
  width: 50%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form_container {
  width: 80%;
  max-width: 700px;
  margin: 20vh auto;
  height: max-content;
  background: white;
  padding: 20px;
  border-radius: 10px;
}
.description_flexbox {
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

@media screen and (max-width: 765px) {
  .form_container {
    margin-top: 10vh;
    width: 80%;
    max-width: 400px;
  }
  .description_flexbox {
    display: block;
  }
  .description_left_block {
    padding: 0;
    border-width: 0;
    width: 100%;
  }
  .description_right_block {
    margin-top: 20px;
    padding: 0;
    width: 100%;
  }
}
</style>
