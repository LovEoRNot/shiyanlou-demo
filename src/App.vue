<template>
  <div class="index">
    <Navbar></Navbar>     
    <Banner></Banner>   
    <Spcourse></Spcourse>   
    <CoursePartOne></CoursePartOne>
    <CoursePartTwo></CoursePartTwo>
    <Execise></Execise>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import Spcourse from './components/Spcourse.vue'
import CoursePartOne from './components/CoursePartOne.vue'
import CoursePartTwo from './components/CoursePartTwo.vue'
import FooterBar from './components/FooterBar.vue'
import Execise from './components/Exercise.vue'
export default {
  components: {
    Navbar,
    Banner,
    Spcourse,
    CoursePartOne,
    CoursePartTwo,
    Execise,
    FooterBar
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
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
