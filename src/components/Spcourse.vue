<template>
  <div class="container course-section">
    <CourseHeader :header="headerInfo"></CourseHeader>
    <div class="row">
      <div class="col-sm-6">
        <a href="###" class="special-course">
          <img :src="img" alt="课程推荐">
        </a>        
      </div>
      <div class="col-sm-6 no-padding">
        <Course :course-detail="courseDetail"></Course>
        <Course :course-detail="courseDetail"></Course>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 no-padding">
        <Course :course-detail="courseDetail"></Course>
        <Course :course-detail="courseDetail"></Course>
      </div>
      <div class="col-sm-6 no-padding">
        <Course :course-detail="courseDetail"></Course>
        <Course :course-detail="courseDetail"></Course>
      </div>
    </div>
  </div>
</template>

<script>
var courseImg = require('../assets/course.png')

import Course from './course-item/Course.vue'
import CourseHeader from './course-item/CourseHeader.vue'

export default {
  data () {
    return {
      img: courseImg,
      courseDetail: {
        url: '##',
        pic: courseImg,
        title: 'Laravel 5.1 基础教程',
        desc: 'Laravel 是当下最火的 PHP 开发框架。它以编码风格优雅著称，每行代码都非常简洁，富有表达力，并且拥有强大的组件开发生态，可以帮助你快速搭建完美的大型网络应用。本课程将从环境配置开始，将路由，控制器等基本知识点逐个在后续的实验中进行讲解和实践，力求让学习者通过自己做实验来更快上手 Laravel 开发，也能在开发的过程中体会 Laravel 的艺术感。课程在最后一个实验还将通过30分钟搭建一个迷你博客，让大家对Laravel基础知识进行回顾通过实践加深记忆并巩固学习。',
        people: 2217,
        type: 'free'   //vip
      },
      headerInfo: {
        header: '精选项目课',
        smallHeader: '精选会员项目课程，动手中收获'
      }
    }   
  },
  components: {
    Course,
    CourseHeader
  }
}
</script>

<style lang="scss">
.special-course {
  display: block;
  height: 250px;
  margin-bottom: 20px;
  box-shadow: 0 1px 2px 0 #ddd;

  :hover {
    box-shadow: 0 8px 30px #aaa;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>


