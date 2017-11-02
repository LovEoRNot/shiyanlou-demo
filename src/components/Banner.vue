<template>
  <div class="banner">
    <div class="scroller-banner" :style="{'background': bgColors[nowShow]}">
      <div class="container">
        <transition-group class="banner-img" name="fadeIn" tag="ul">
          <li v-show="nowShow == index" v-for="(img, index) in imgs" :key="index"><img :src="img" alt=""></li>
        </transition-group>   
        <div class="prev-btn" @click="click(-1)"><span class="glyphicon glyphicon-chevron-left"></span></div>   
        <div class="next-btn" @click="click(1)"><span class="glyphicon glyphicon-chevron-right"></span></div>
        <ul class="bottom-btn">
          <li :class="{active: nowShow == 0}" @mouseover="hover(0)"></li>
          <li :class="{active: nowShow == 1}" @mouseover="hover(1)"></li>
          <li :class="{active: nowShow == 2}" @mouseover="hover(2)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var img1 = require('../assets/banner-01.png');
var img2 = require('../assets/banner-02.png');
var img3 = require('../assets/banner-03.png');
export default {
  data () {
    return {
      nowShow: 0,
      timer: null,
      duration: 5000,
      bgColors: ['rgb(104, 168, 255)', 'rgb(44, 51, 53)', 'rgb(230, 84, 108)'],
      imgs: [img1, img2, img3]
    }
  },
  mounted () {
    var vm = this;
    vm.timer = setInterval(function() {
      vm.nowShow = (vm.nowShow + 1) % 3;
    }, vm.duration)
  },
  methods: {
    click (n) {
      var vm = this;
      clearInterval(vm.timer);
      vm.nowShow = (vm.nowShow + n) % 3;
      vm.timer = setInterval(function() {
        vm.nowShow = (vm.nowShow + 1) % 3;
      }, vm.duration)
    },
    hover (n) {
      var vm = this;
      clearInterval(vm.timer);
      vm.nowShow = n;
      vm.timer = setInterval(function() {
        vm.nowShow = (vm.nowShow + 1) % 3;
      }, vm.duration)
    }
  }
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
  height: 100%;
  width: 100%;
  background: rgb(104, 168, 255);
  @media screen and (max-width: 768px)  {
    height: 300px;
  }
}

.container {
  position: relative;
  height: 100%;
  ul.banner-img {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
    li{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
      
    }
  }
  .common {
    position: absolute;
    top: 250px;  
    @media screen and (max-width: 768px) {
      top: 130px;
    } 
    span {
      font-size: 28px;
      color: #fff;
      opacity: .4;
    }
    
    cursor: pointer;
  }
  .prev-btn {
    @extend .common;
    left: 300px;
    @media screen and (max-width: 768px) {
      left: 20px;
    }
  }
  .next-btn {
    @extend .common;
    right: 20px;
  }
  .bottom-btn {
    position: absolute;
    bottom: 10px;
    right: 35%;
    list-style: none;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 768px) {
      right: 40%;
    }
    li {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #fff;
      opacity: .4;
      margin-right: 10px;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
    }
  }
}
.fadeIn-enter-active {
  transition: all .8s ease;
}
.fadeIn-enter-active{
  opacity: 1;
}
.fadeIn-enter {
  opacity: 0;
}
</style>


