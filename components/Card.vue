<template>
  <div>
    <div @click = "next" class="card_container" ref="card_container" draggable="true">
      <el-carousel
        height="60vh"
        v-show="op === 1"
        :initial-index.sync="0"
        :autoplay="false"
        trigger="click"
        ref="car"
      >
        <el-carousel-item
          style="background: #fff"
          v-for="item in currentItem"
          :key="item"
          class="carousel"

        >
          <Bio v-show="item === 1"></Bio>
          <Story v-show="item !== 1"></Story>
        </el-carousel-item>
      </el-carousel>
      <Loading v-show="op === 0" style="z-index: 100000"></Loading>
    </div>

    </div>
  </div>
</template>

<script>
    // <div class="dash_buttons_container" v-show="!no_show">
    //   <div class="circle" @click="next">
    //     <i class="el-icon-check"></i>
    //   </div>
    //   <div class="circle">
    //     <i class="el-icon-close"></i>
    //   </div>
//  style="

import Bio from "./Bio";
import Loading from "./Loading";
import Story from "./Story";
export default {
  name: "Card",
  data() {
    return {
      op: 1,
      currentItem: [1, 2, 3]
    };
  },
  props: {
    no_show: Boolean
  },
  methods: {
    next() {
      console.log(this.$refs.card_container.classList.toggle('disappear'))
      // this.$refs.car.setActiveItem(0);
      //
      // this.op = 0;
      // this.currentItem = [5, 4, 2];
      // setTimeout(() => {
      //   this.op = 1;
      // }, 1000);
    }
  },
  components: { Bio, Story, Loading }
};
</script>

<style scoped>
  .disappear{
    display: none;
  }
.card_container {
  box-shadow: 1px 1px 5px #000;
  position: absolute;
  z-index: 99;
  width: 60vw;
  margin: 0 5vw;
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
