<template>
  <div >
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
      <el-button>Back</el-button>
      <el-button>Submit</el-button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "NewCard"
  }
</script>

<style scoped>
  .lb{
    margin: 5px 0 20px 0;
  }
</style>
