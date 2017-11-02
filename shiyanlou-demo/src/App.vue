<template>
  <div class="index">
    <Navbar></Navbar>     
    <Banner></Banner>         
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
export default {
  components: {
    Navbar,
    Banner
  }
}
</script>

<style lang="scss">
.index {
  background: #f8f8f8;
}
</style>
