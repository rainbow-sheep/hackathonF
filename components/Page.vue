<template>
  <div class="max_width">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Page",
    }
</script>

<style scoped>
  .max_width{
    max-width: 800px;
    margin: 0 auto;
  }
</style>
