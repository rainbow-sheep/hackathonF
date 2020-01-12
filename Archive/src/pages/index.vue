<template>
  <div>
    <div class="background">
      <Page>
        <Nav></Nav>
      </Page>
    </div>
  </div>



</template>

<script>
import Nav from "../components/Nav";
import Page from "../components/Page";

export default {
  components: {
    Page,
    Nav,
  }
}
</script>

<style scoped>
  .background{

  }
</style>
