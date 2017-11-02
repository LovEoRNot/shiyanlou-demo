<template>
  <div class="course-header">
    <a href="##">
      <span class="h3">{{header.header}}<span class="vertical-line" v-show="header.smallHeader.length > 0">|</span></span>
      <span v-show="header.smallHeader.length > 0">{{header.smallHeader}}</span>
    </a>      
    <a href="###" class="pull-right" style="padding-top: 5px">更多></a>
  </div>
</template>

<script>
export default {
  props: ['header']
}
</script>

<style lang="scss" scoped>
.course-header {
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: #565656;
  }
  .vertical-line {
    margin: 0 5px;
  }
}
</style>


