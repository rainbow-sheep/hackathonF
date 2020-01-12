<template>
  <div style="overflow: hidden">
    <Nav :has_background="true"></Nav>
    <div class="dash_left_box">
      <div class="messages">
        <el-button type="" style="width: 100%;" @click="dialogVisible = true"
          >✒️ Edit my profile</el-button
        >
        <br /><br />
        <el-button type="" style="width: 100%;">⚙️ Settings</el-button>
        <br /><br />
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
      <template>
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
              v-for="item in 4"
              :key="item"
              class="carousel"
            >
              <Bio style="width: 100%;"></Bio>
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
        <Card></Card>
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
import source from "@/bing";
import Bio from "../components/Bio";
import Nav from "../components/Nav";
import Card from "../components/Card";

export default {
  name: "App",
  components: { Card, Nav, Bio, Tinder },
  data: () => ({
    queue: [],
    offset: 0,
    history: [],
    dialogVisible: false,
    ops: 0
  }),
  created() {
    this.mock();
  },
  methods: {
    mock(count = 5, append = true) {
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: source[this.offset] });
        this.offset++;
      }
      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
    },
    onSubmit({ item }) {
      if (this.queue.length < 3) {
        this.mock();
      }
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
.messages {
  margin: 7vh 5vw;
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
