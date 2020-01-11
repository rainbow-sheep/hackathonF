<template>
  <div>
    <div class="card_container" >
      <el-carousel height="60vh" v-show="op === 1"
                   :initial-index.sync="ii"
                   :autoplay="false"
                   trigger="click"
                   ref="car"
      >
        <el-carousel-item
          style="background: #fff"
          v-for="item in currentItem" :key="item" class="carousel">
          <Bio v-show="item === 1"></Bio>
          <Story v-show="item !== 1"></Story>
        </el-carousel-item>
      </el-carousel>
      <Loading v-show="op === 0" style="z-index: 100000"></Loading>
    </div>
    <div class="dash_buttons_container" v-show="!no_show">
      <div class="circle" @click="next">
        <i class="el-icon-check"></i>
      </div>
      <div class="circle">
        <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
    import Bio from "./Bio";
    import Loading from "./Loading";
    import Story from "./Story"
    export default {
        name: "Card",
      data(){
        return {
          op: 1,
          currentItem: [1, 2, 3]
        }
      },
      props: {
        no_show: Boolean
      },
      methods: {
        next(){
          this.$refs.car.setActiveItem(0);

          this.op = 0;
          this.currentItem = [5,4,2];
          setTimeout(()=>{
            this.op = 1;
          }, 1000)
        }
      },
      components: {Bio, Story, Loading}
    }
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
  .carousel{
    margin: auto auto;
  }

  .circle{
    transition: all ease-in-out .2s;
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
  .circle:hover{
    background: #eee;
    color: #aaa;
  }
  .dash_buttons_container{
    display: flex;
    justify-content: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
