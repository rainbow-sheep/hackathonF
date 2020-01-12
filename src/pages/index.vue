<template>
  <div class="login_container">
    <Nav :has_background="true"></Nav>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "login",
  components: { Nav }
};
</script>

<style scoped>
.login_container {
  height: 100vh;
  overflow: hidden;

  background-size: cover;
}

.title {
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.2px;
  line-height: 1.4;
}
.auth_label {
  margin: 10px 0;
}
.auth_button {
  margin-top: 20px;
  background-color: rgb(79, 101, 241);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  height: 44px;
  letter-spacing: 1px;
  line-height: inherit;
  text-transform: uppercase;
  width: 100%;
  box-shadow: rgb(67, 81, 232) 0px 0px 0px 0px inset,
    rgba(79, 101, 241, 0.15) 0px 7px 12px -2px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 4px;
  padding: 9px 20px;
  text-decoration: none;
}
</style>
