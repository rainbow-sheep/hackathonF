<template>
  <div class="description_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Describe Yourself</div>
      <div class="description_flexbox">
        <section class="description_left_block">
          <el-textarea></el-textarea>
        </section>
        <section class="description_right_block">
          <div style="display: flex; flex-direction: column">
            <el-alert
              title="Any information provided beyond this section is going to be public"
              type="info"
              effect="dark">
            </el-alert>
            <br>
            <el-button type="primary">Link Facebook</el-button>
            <br>
            <el-button type="primary">Link GitHub</el-button>
          </div>

        </section>
      </div>
      <el-button class="auth_button">Next</el-button>
    </div>
  </div>

</template>

<script>
  import Nav from "../components/Nav";
  export default {
    name: "description",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    components: {Nav}
  }
</script>

<style scoped>
  .description_container {
    height: 100vh;
    overflow: hidden;
    background-image: url("/login_pic.jpg");
    background-size: cover;
  }
  .description_left_block{
    border-style: solid;
    border-width: 0 1px 0 0;
    border-color: #eee;
    width: 50%;
    padding-right: 10px
  }
  .description_right_block{
    width: 50%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .form_container{
    width: 80%;
    max-width: 700px;
    margin: 20vh auto;
    height: max-content;
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  .description_flexbox{
    display: flex;
    justify-content: space-between
  }
  .title{
    font-weight: 900;
    font-size: 32px;
    letter-spacing: 0.2px;
    line-height: 1.4;
  }
  .auth_label{
    margin: 10px 0;
  }
  .auth_button{
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
    box-shadow: rgb(67, 81, 232) 0px 0px 0px 0px inset, rgba(79, 101, 241, 0.15) 0px 7px 12px -2px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
    padding: 9px 20px;
    text-decoration: none;
  }
  @media screen and (max-width: 765px) {
    .form_container{
      margin-top: 10vh;
      width: 80%;
      max-width: 400px;
    }
    .description_flexbox{
      display: block;
    }
    .description_left_block{
      padding: 0;
      border-width: 0;
      width: 100%;
    }
    .description_right_block{
      margin-top: 20px;
      padding: 0;
      width: 100%;
    }
  }
</style>
