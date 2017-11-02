<template>
  <div class="container course-section">
    <CourseHeader :header="headerInfo"></CourseHeader>
    <div class="row execsie-item">
      <div class="col-md-5 col-sm-4 execise-pic">
        <img src="https://dn-simplecloud.shiyanlou.com/1490341573313.png?imageView2/0/h/300" alt="">
      </div>
      <div class="col-md-7 col-sm-8 execise-body">
        <h4 class="desc-heading"><span>已上线</span>Python网络爬虫实战--Scrapy框架学习</h4>
        <div class="desc-body">
          本训练营将通过13个体系化的实验内容，带领同学们从零基础逐步入门爬虫，教会大家如何使用Scrapy框架编写网络爬虫。课程安排上先通过一个简单的爬虫项目，让大家直观的看到爬取的结果数据。结合运行结果对爬虫的结构以及Scrapy的运行规则进行剖析。最后通过两个实战项目爬取实验楼课程信息和爬取电影网站信息，手把手教会大家如何使用Scrapy框架编写网络爬虫。
        </div>
        <div style="">
          推荐先学： <a href="###" style="text-decoration: none;">Python 编程语言</a>
        </div>
        <div class="tags">
          <a href="##">网络爬虫</a>
          <a href="##">Scrapy</a>
          <a href="##">Python</a>
        </div>
        <div class="subscribe">
          <div class="price pull-left">
            <span>¥ 199</span>
            <span class="vip">会员最低五折</span>
          </div>
          <a href="###" class="pull-right">查看详情</a>
        </div>
      </div>
    </div>
    <div class="row execsie-item">
      <div class="col-md-5 col-sm-4 execise-pic">
        <img src="https://dn-simplecloud.shiyanlou.com/1478484028300.png" alt="">
      </div>
      <div class="col-md-7 col-sm-8 execise-body">
        <h4 class="desc-heading"><span>已上线</span>动手实战学Docker(15个实验+54个视频)</h4>
        <div class="desc-body">
          15个实验+54个视频带你体验Docker容器技术魅力，最快的上手教程，最新的技术领域，最多的动手实践。在线实验学习Docker，DockerFile，Compose，Swarm，Kubernate等技术。
        </div>
        <div style="">
          推荐先学： <a href="###" style="text-decoration: none;">Linux基础入门</a>
        </div>
        <div class="tags">
          <a href="##">Docker</a>
          <a href="##">云计算</a>
          <a href="##">Linux</a>
        </div>
        <div class="subscribe">
          <div class="price pull-left">
            <span>¥ 199</span>
            <span class="vip">会员最低五折</span>
          </div>
          <a href="###" class="pull-right">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseHeader from './course-item/CourseHeader.vue'

export default {
  data () {
    return {
      headerInfo: {
        header: '训练营强化',
        smallHeader: '技术大牛有问必答，完成课程获得证书'
      }
    }
  },
  components: {
    CourseHeader
  }
}
</script>

<style lang="scss" scoped>
.execsie-item {
  margin-bottom: 20px;
  height: 250px;
}
.execise-pic {
  height: 250px;
  img {
    width: 100%;
    height: 100%;
 }
}

.execise-body {
  position: relative;
  padding: 20px;
  div {
    margin-top: 18px;
  }
  .desc-heading {
    color: #424242;
    font-weight: 400;
    font-size: 16px;
    margin: 0 0 5px;

    span {
      display: inline-block;
      margin-right: 4px;
      padding: 4px 8px;
      color: #fff;
      background: #00be91;
      font-size: 14px;
      font-weight: 100;
    }
  }
  .desc-body {       
    height: 100px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  .tags {
    a {
      text-decoration: none;
      color: #337ab7;
      cursor: default;
    }
  }
  .subscribe {
    position: absolute;
    bottom: 0;
    right: 0;
    .price {
      span {
        display: block
      }
      position: relative;
      top: -12px;
      color: #fa3d2e;
      font-size: 32px;
      font-weight: 700;
      line-height: 32px;
      padding: 10px;
    }
    .vip {      
      padding: 0;
      margin: 0;
      color: #ff9717;
      font-size: 14px;
    }
    a {
      display: inline-block;
      margin: 25px 0 0 10px;
      padding: 4px 16px;
      color: #fff;
      background: #ff9717;
      font-size: 21px;
      border-radius: 0;
      text-decoration: none;
    }
  }
}
</style>
