<template>
  <div class="story_container">
    <div class="story_left"></div>
    <div class="story_right">
      <h1>I travelled</h1>
      <div class="story_line"></div>
      <p class="story_desc">
        I am so cool! I am so cool!I am so cool!I am so cool!I am so cool!I am
        so cool!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  data() {
    return {
      ops: 2 //2 for new, 3 for edit
    };
  }
};
</script>

<style scoped>
.story_container {
  display: flex;
  height: 100%;
  width: 100%;
}
.story_left {
  border-radius: 5px;
  width: 50%;
  height: 100%;
}
.el-upload-dragger {
  height: 100%;
}
.story_right {
  width: 50%;
  padding: 20px;
}
.story_line {
  margin-top: 7px;
  height: 7px;
  background: #aaa;
  width: 20%;
  margin-bottom: 20px;
}
.story_desc {
  color: #aaa;
}
</style>
