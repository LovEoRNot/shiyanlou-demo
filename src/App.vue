<template>
<<<<<<< HEAD
<div>
  <router-view></router-view>
</div>
</template>

<script>
import Index from './components/Index.vue'
import { router } from './routes/routes'
=======
  <div class="index">
    <Navbar></Navbar>     
    <Banner></Banner>         
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
<<<<<<< HEAD
>>>>>>> parent of 571e007... 新增了大量组件
=======
>>>>>>> parent of 571e007... 新增了大量组件
export default {
  router,
  components: {
<<<<<<< HEAD
    Index
=======
    Navbar,
    Banner
<<<<<<< HEAD
>>>>>>> parent of 571e007... 新增了大量组件
=======
>>>>>>> parent of 571e007... 新增了大量组件
  }
}
</script>


<style lang="scss">
.index {
  background: #f8f8f8;
}
</style>
