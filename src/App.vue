<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import Index from './components/Index.vue'
import { router } from './routes/routes'
export default {
  router,
  components: {
    Index
  }
}
</script>


<style lang="scss">
.index {
  background: #f8f8f8;
  z-index: -100;
}
.course-section {
  padding-top: 30px;
}
.no-padding {
  padding: 0;
}
</style>
