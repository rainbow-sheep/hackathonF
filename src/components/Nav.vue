<template>
  <div class="nav_container" :class="has_background ? 'nav_background' : ''">
    <div @click="goHome" class="nav_content">
      <img
        height="71"
        style="padding: 30px 0px 10px 10px;"
        src="../assets/logo.svg"
      />
      <div style="margin: auto 20px auto 0; ">
        <div class="title nav_name pal">PAL</div>
        <div class="title nav_name up">&nbsp;&nbsp;&nbsp;UP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    has_background: Boolean
  },
  methods: {
    goHome() {
      window.location = "/";
    }
  }
};
</script>

<style scoped>
.nav_content {
  display: flex;
  flex-direction: row;
}
.nav_container {
  width: 100%;
}
.nav_background {
  border-width: 0 0 0.5px 0;
  color: #eee;
  border-style: solid;
  background-color: white;
  background-image: "../assets/landing.png";
}
.nav_container {
  display: flex;
  align-items: center;
}
.nav_name {
  margin: auto 0.2em;
  line-height: 0.8em;
  color: #000;
  font-size: 26px;
  font-weight: 20;
  font-family: "Josefin Sans", sans-serif;
}
</style>
