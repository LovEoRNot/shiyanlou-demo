<template>
  <div class="col-md-6 col-sm-6 course">
    <a :href="courseDetail.url" class="course-item">
      <div class="course-img">
        <img :src="courseDetail.pic" alt="">
      </div>
      <div class="course-body">
        <div class="course-title">{{courseDetail.title}}</div>
        <div class="course-desc">{{courseDetail.desc}}</div>
      </div>
      <div class="course-foot">
          <span class="pull-left course-people">
            <i class="glyphicon glyphicon-eye-open"></i>
            {{courseDetail.people}}
          </span>
          <span :class="['pull-right', 'course-'+courseDetail.type]">
            {{courseDetail.type == 'free' ? '免费' : '会员'}}
          </span>        
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['courseDetail']
}
</script>

<style lang="scss" scoped>
.course {
  margin: 0 0 20px;
}
.course-item {
  display: block;
  position: relative;
  margin: 0;
  background: #fff;
  box-shadow: 0 2px 2px 0 #eee;
  min-height: 220px;
  text-decoration: none;

  .course-img {
    widows: 100%;
    img {
      width: 100%;
      height: 150px;
    }
  }
  &:hover {
    box-shadow: 0 8px 30px #aaa;
    .course-desc {
      height: 55px;
    }
    .course-body {
      bottom: 53px;
    }
  }

  .course-title {
    display: block;
    width: 100%;
    padding: 20px 10px 0;
    color: #666;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .course-body {
    position: relative;
    bottom: 0;
    background: #fff;
    transition: bottom .3s;
    height: 100px;
  }
  .course-desc {
    // position: absolute;
    height: 0;
    bottom: 43px;
    padding: 0 10px;
    margin-top: 10px;
    color: #666;
    font-size: 13px;
    line-height: 1.4;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    transition: height .3s;
  }
  .course-foot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 43px;
    color: #9b9da2;
    padding: 5px 10px;
    overflow: hidden;
    margin-top: 10px;

    .course-people {
      font-size: 12px;
      display: inline-block;
      padding: 4px 0 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .status {
      padding: 3px 10px;
      color: #fff;
      border-radius: 100px;
    }
    .course-free {
      @extend .status;
      background-color: #59cf4a;
    }
    .course-vip {
      @extend .status;
      background-color: #ffae0f;
    }
  }
}

</style>


