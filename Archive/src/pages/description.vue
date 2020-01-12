<template>
  <div class="description_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Describe Yourself</div>
      <div><input class="searche" placeholder="What's your name?" /></div>
      <div class="description_flexbox">
        <section class="description_left_block">
          <el-input
            class="interesting"
            placeholder="Write your bio..."
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
            <el-input v-model: "facebook" placeholder="Facebook URL"></el-input>
            <br />
            <el-input v-model: "github" placeholder="Github URL"></el-input>
            <div
              style="margin-top: 5px; text-align: right; color: #808080; font-size: 14px "
            >
              (Optional)
            </div>
          </div>
        </section>
      </div>
      <el-button @click="submit()" id="auth_button">Next</el-button>
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
      github: "",
      facebook: "", 
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
.searche {
  background-color: transparent;
  border-width: 0 0 1px 0;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  box-shadow: none;
  float: none;
  font-size: 18px;
  letter-spacing: 0.5pt;
  padding-bottom: 5px;
  margin: 10px 0;
  margin-right: 10px;
  width: 400px;
  outline: none;
}
.alertt {
  padding: 8px !important;
  padding-right: 16px !important;
}
.description_container {
  height: 100vh;
  overflow: hidden;
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
