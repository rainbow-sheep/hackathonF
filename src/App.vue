<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
#auth_button {
  margin-top: 20px;
  background-color: #ff6348;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  height: 44px;
  letter-spacing: 1px;
  line-height: inherit;
  text-transform: uppercase;
  width: 100%;
  border-radius: 4px;
  padding: 9px 20px;
  text-decoration: none;
  border: none;
}
.form_container {
  width: 80%;
  max-width: 700px;
  margin: 5vh auto;
  height: max-content;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

@media screen and (max-width: 765px) {
  .form_container {
    margin-top: 5vh;
    width: 80%;
    max-width: 400px;
  }
}
#auth_button:hover {
  background-color: #e62200;
  color: white !important;
}

#auth_button:focus {
  background-color: #e62200;
  color: white !important;
}
</style>
