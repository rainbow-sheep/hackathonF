<template>
  <div style="overflow: hidden">
    <div class="navAdd">
      <el-button
        type=""
        style="width: 100%; margin-right: 20px"
        @click="dialogVisible = true"
        >✒️ Edit my profile</el-button
      >
      <br /><br />
      <el-button type="" style="width: 100%;">⚙️ Settings</el-button>
      <br /><br />
    </div>
    <Nav :has_background="true"></Nav>

    <div class="dash_left_box">
      <div class="messages">
        <strong style="font-size: 24px;">Messages</strong>
        <br /><br />
        <span style="color: #aaa;">No new messages</span>
        <br />
        <span style="color: #aaa;">Visit people on right</span>
        <div class="line" style="width: 40%;margin-top: 30px;"></div>
        <div class="line" style="width: 80%;margin-top: 10px;"></div>
      </div>
    </div>
    <Tinder
      ref="tinder"
      key-name="id"
      :queue.sync="queue"
      :offset-y="10"
      @submit="onSubmit"
      style="margin-top: 5vh;"
    >
      <template slot-scope="scope">
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
              v-for="item in scope.data.stories.length + 1"
              :key="item"
              class="carousel"
            >
              <Bio v-show="item === 1" :content="scope.data"></Bio>
              <Story v-show="item !== 1" :content="scope.data.stories[item-1]"></Story>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
      <img
        class="like-pointer"
        slot="like"
        src="../assets/like-txt.png"
        style="z-index: 1000;"
      />
      <img
        class="nope-pointer"
        slot="nope"
        src="../assets/nope-txt.png"
        style="z-index: 1000;"
      />
      <img
        class="super-pointer"
        slot="super"
        src="../assets/super-txt.png"
        style="z-index: 1000;"
      />
      <img
        class="rewind-pointer"
        slot="rewind"
        src="../assets/rewind-txt.png"
        style="z-index: 1000;"
      />
    </Tinder>
    <div class="btns">
      <img src="../assets/nope.png" @click="decide('nope')" />
      <img />
      <img src="../assets/like.png" @click="decide('like')" />
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      title="Preview Your Profile"
      :before-close="handleClose"
    >
      <div v-show="ops === 0">
        <Card :content="selfUser"></Card>
        <div
          style="display: flex; justify-content: center; margin: 20px 0 0 0;"
        >
          <el-button @click="ops = 1">Add New Pages</el-button>
          <el-button @click="ops = 2">Edit Current Page</el-button>
        </div>
      </div>
      <div v-show="ops === 1">
        <div style="display: flex; justify-content: space-around">
          <el-upload
            drag
            :limit="1"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Click to upload
            </div>
            <div class="el-upload__tip" slot="tip">
              Upload travel pictures and work (jpg/png)
            </div>
          </el-upload>
          <div style="margin-left: 20px; width: 50%;">
            <div style="margin: 0 0 10px 0;">Title</div>
            <el-input></el-input>
            <br />
            <div style="margin: 10px 0 10px 0;">Content</div>
            <el-input type="textarea"></el-input>
          </div>
        </div>
        <div style="display: flex; justify-content: center;margin: 20px 0 0 0;">
          <el-button @click="ops = 0">Back</el-button>
          <el-button>Submit</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tinder from "vue-tinder";
import Story from "../components/Story";
import Bio from "../components/Bio";
import Nav from "../components/Nav";
import Card from "../components/Card";
import {request} from "../utils/request";

export default {
  name: "App",
  components: { Card, Nav, Bio, Tinder, Story },
  data: () => ({
    queue: [],
    offset: 0,
    history: [],
    dialogVisible: false,
    ops: 0,
    selfUser: {}
  }),
  created() {
    this.get_data();
    this.get_self()
  },
  methods: {
    get_data() {
      request("get", `recommendations?token=${localStorage.getItem("session")}`).then((data)=>{
        data.data.forEach((v, k)=>{
          v["id"] = k;
          v["skills"] = [];
          v["interests"] = [];
          v["info"].forEach((B, ke)=>{
            if (B > 0){
              if (4 <= ke && ke <= 18){
                v["skills"].push(ke - 4)
              } else {
                v["interests"].push(ke - 19)
              }
            }
          })
          this.queue.push(v);

        })
      })
    },
    get_self(){
      request("get", `self?token=${localStorage.getItem("session")}`).then((data)=> {
        let user = data.data;
        user["skills"] = [];
        user["interests"] = [];
        user["info"].forEach((B, ke)=>{
          if (B > 0){
            if (4 <= ke && ke <= 18){
              user["skills"].push(ke - 4)
            } else {
              user["interests"].push(ke - 19)
            }
          }
        })
        this.selfUser = user;
      })
    },
    onSubmit({ item }) {
      if (this.queue.length < 3) {
        this.get_data();
      }
      this.queue.pop()
      this.history.push(item);
    },
    decide(choice) {
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        window.open("https://shanlh.github.io/vue-tinder");
      } else {
        this.$refs.tinder.decide(choice);
      }
    }
  }
};
</script>

<style>
.dash_left_box {
  overflow: hidden;
  width: 30vw;
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #eee;
  height: 85vh;
}
#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 5%;
  right: 5%;
  top: 15vh;
  margin: 0 30%;
  margin-top: 5vh;
  width: 50%;
  height: calc(70vh - 65px - 30px);
}
.line {
  height: 10px;
  background: #eee;
  width: 20%;
}
.navAdd {
  position: absolute;
  width: 10%;
  display: flex;
  height: 5vh;
  margin-top: 4vh;
  margin-left: 80%;
}
.messages {
  margin: 3vh 7vh 5vw 3vw;
}
.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.btns {
  position: absolute;
  right: 30vw;
  bottom: 30px;
  height: 145px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>
