<template>
  <div class="banner">
    <div class="scroller-banner">
      <div class="container">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
$bannerH: 522px;
.banner {
  height: $bannerH;
  position: relative;
  @media screen and (max-width: 768px)  {
    height: 300px;
  }
}
.scroller-banner {
  position: absolute;
  top: 0;
  left: 0;
  height: $bannerH;
  width: 100%;
  background: rgb(104, 168, 255);
  @media screen and (max-width: 768px)  {
    height: 300px;
  }
}
</style>


