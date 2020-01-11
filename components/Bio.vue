<template>
  <div class="card_right_box">
    <h1 class="card_title">Chad Spensky 👋 </h1>

    <div class="card_line"></div>
    <div>
      <div class="card_box ">
        <strong>Bio</strong>
        <p>I am Chad. An asshole who rejected Shou.</p>
      </div>

      <div class="card_box ">
        <strong>Interests</strong>
        <div>
          <el-button size="small" round style="margin-top: 10px;" disabled>Fucking</el-button>
          <el-button size="small" round style="margin-top: 10px;">Sucking</el-button>
          <el-button size="small" round style="margin-top: 10px;">Going</el-button>
        </div>
        <div class="card_divide"></div>
        <strong>Skills</strong>
        <div>
          <el-button size="small" round style="margin-top: 10px;">Fucking</el-button>
          <el-button size="small" round style="margin-top: 10px;">Sucking</el-button>
          <el-button size="small" round style="margin-top: 10px;">Going</el-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Bio"
    }
</script>

<style scoped>

  .card_title{
  }
  .card_right_box{
    margin: 20px;
  }
  .card_line{
    margin-top: 10px;
    height: 7px;
    background: #aaa;
    width: 20%;
    margin-bottom: 20px;
  }
  .card_divide{
    height: 2px;
    background: rgba(255,255,255,0.2);
    width: 95%;
    margin: 20px  auto 10px auto;
  }
  .card_box{
    margin: 10px 0;
    width: 100%;
    height: max-content;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
