<template>
  <div class="story_container">
    <strong>No more matches</strong>
    <p>/* Check back later */</p>
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
