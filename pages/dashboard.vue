<template>
  <div>
    <Nav :has_background="true"></Nav>
    <div class="dash_container">
      <div class="dash_left_box">
        <div class="messages">
          <el-button type="" style="width: 100%;" @click="dialogVisible=true">✒️ Modify My Profile</el-button>
          <br><br>
          <el-button type="" style="width: 100%;">⚙️ Settings</el-button>
          <br><br>
          <strong style="font-size: 24px;">Messages</strong>
          <br><br>
          <span style="color: #aaa;">/* No one sent you any message */</span>
          <br>
          <span style="color: #aaa;">/* Visit more people on right */</span>
          <div class="line" style="width: 40%;margin-top: 30px;"></div>
          <div class="line" style="width: 80%;margin-top: 10px;"></div>

        </div>
      </div>
      <div class="dash_right_box">
        <Card ref="card" ></Card>
        <div>
          <Card ref="card" style="margin-top: 5%;"></Card>


        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      title="Preview Your Profile"
      :before-close="handleClose">
      <div v-show="ops===0">
        <Card :no_show="true"></Card>
        <div style="display: flex; justify-content: center; margin: 20px 0 0 0;">
          <el-button @click="ops=1">Add New Pages</el-button>
          <el-button @click="ops=2">Edit Current Page</el-button>
        </div>
      </div>
      <div v-show="ops===1">
        <div style="display: flex; justify-content: space-around">
          <el-upload
            drag
            :limit="1"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div style="margin-left: 20px; width: 50%;">
            <div style="margin: 0 0 10px 0;">Title</div>
            <el-input></el-input>
            <br>
            <div style="margin: 10px 0 10px 0;">Content</div>
            <el-input type="textarea"></el-input>
          </div>
        </div>
        <div style="display: flex; justify-content: center;margin: 20px 0 0 0;">
          <el-button @click="ops=0">Back</el-button>
          <el-button>Submit</el-button>
        </div>
      </div>

    </el-dialog>
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import Page from "../components/Page";
  import Card from "../components/Card";
  import NewCard from "../components/NewCard";
  export default {
    name: "dashboard",
    data() {
      return {
        dialogVisible:false,
        ops: 0
      }
    },
    methods: {
      next(){
        this.$refs.card.$el.classList.add("disappear")
      }
    },
    components: {NewCard, Card, Page, Nav}
  }
</script>

<style scoped>

  .dash_container{
    display: flex;
    flex-direction: row;
    height: 90vh;
    overflow: hidden;
  }
  .dash_left_box{
    width: 30%;
    min-width: 300px;
    color: #000;
    border-style: solid;
    border-width: 0 1px 0 0;
    height: 100vh;
    border-color: #eee;
    padding: 0 20px;
    overflow: hidden;
  }
  .dash_right_box{
    width: 70%;

  }
  .line{
    height: 10px;
    background: #eee;
    width: 20%;
  }
  .messages{
    margin: 10% 0;
  }

</style>
