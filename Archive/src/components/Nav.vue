<template>
  <div class="nav_container" :class="has_background ? 'nav_background' : ''">
    <div class="nav_content">
      <div class="title nav_name">PalUp</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    has_background: Boolean
  }
};
</script>

<style scoped>
.nav_container {
  width: 100%;
  height: 10vh;
}
.nav_background {
  border-width: 0 0 0.5px 0;
  color: #eee;
  border-style: solid;
  background-color: white;
}
.nav_container {
  display: flex;
  align-items: center;
}
.nav_name {
  margin: auto 2em;
  color: #000;
  font-size: 26px;
  font-weight: 800;
}
</style>
