<template>
  <div>
    <div class="card_container">
      <el-carousel
        height="60vh"
        :initial-index.sync="ii"
        :autoplay="false"
        trigger="click"
        ref="car"
      >
        <el-carousel-item
          style="background: #fff"
          v-for="item in content.stories.length + 1"
          :key="item"
          class="carousel"
        >
          <Bio v-show="item === 1" :content="content"></Bio>
          <Story v-show="item !== 1"></Story>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Bio from "./Bio";
import Story from "./Story";
export default {
  name: "Card",
  data() {
    return {
      currentItem: [1, 2, 3]
    };
  },
  mounted(){
    console.log(this.content)
  },
  props: {
    no_show: Boolean,
    content: Object
  },
  methods: {
  },
  components: { Bio, Story }
};
</script>

<style scoped>
.card_container {
  width: 90%;
  margin: 0 auto 0 auto;
  border-style: solid;
  border-width: 7px;
  border-radius: 10px;
  height: max-content;
  border-color: #eee;
  background-color: #fff;
}
.carousel {
  margin: auto auto;
}

.circle {
  transition: all ease-in-out 0.2s;
  height: 70px;
  width: 70px;
  border-radius: 10px;
  border-style: solid;
  border-width: 7px;
  border-color: #eee;
  margin: 20px 5px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ccc;
}
.circle:hover {
  background: #eee;
  color: #aaa;
}
.dash_buttons_container {
  display: flex;
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
