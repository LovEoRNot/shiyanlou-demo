<template>
<div class="index-nav">
  <div class="index-page-header">
    <nav class="navbar navbar-default index-page-navbar">
      <div class="container">
        <div class="pc-navbar">      
          <div class="navbar-header">
            <a class="navbar-brand index-navbar-brand" href="/">
              <img src="../assets/logo.png">
            </a>
            <span class="logoword">做实验，学编程</span>
          </div>
          <div class="collapse navbar-collapse navbar-right navbar-option">
            <ul class="nav navbar-nav">
              <li>
                <div class="notice">
                  <span class="glyphicon glyphicon-volume-up"></span>
                  <ul class="scroll-list">
                    <li>昨日实验总数 8394 次</li>
                    <li>昨日实验总时长 4535 小时</li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="##" class="company">企业版</a>
              </li>
              <li>
                <a href="##" class="login">登录</a>
              </li>
              <li>
                <a href="##" class="register">注册</a>
              </li>
            </ul>
          </div>
          <div class="navbar-title">
            <ul class="nav navbar-nav">
              <li class="all-course"><a href="###"><span class="glyphicon glyphicon-th"></span>全部课程</a></li>
              <li><a href="###">路径</a></li>
              <li><a href="###">比赛</a></li>
              <li><a href="###">考试</a></li>
              <li><a href="###">讨论</a></li>
              <li><a href="###">训练营</a></li>
              <li><a href="###">会员</a></li>
              <li class="navbar-right navbar-form">
                <span class="glyphicon glyphicon-search"></span>
                <input type="text" class="form-control" placeholder="搜索 课程/问答">
              </li>
            </ul>
          </div>      
        </div>   
        <div class="ph-navbar">
          <div class="navbar-header">
            <a class="navbar-brand index-navbar-brand" href="/">
              <img src="../assets/logo.png">
            </a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#item-list">
              <span class="sr-only">实验楼</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="item-list" aria-expanded="false">
            <ul class="nav navbar-nav">
              <li><a href="#">路径</a></li>
              <li><a href="#">比赛</a></li>
              <li><a href="#">讨论</a></li>
              <li><a href="#">训练营</a></li>
              <li><a href="#">会员</a></li>
              <li><a href="#">企业版</a></li>
              <li><a href="#">登录</a></li>
              <li><a href="#">注册</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <nav class="navbar navbar-default navbar-fixed-top home-header" style="display: none;">    
    <div class="container" style="position: relative;">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse" aria-expanded="false">
          <span class="sr-only">实验楼</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand index-navbar-brand" href="/">
          <img src="../assets/logo.png">
        </a>
      </div>
      <div class="navbar-collapse collapse" id="header-navbar-collapse" aria-expanded="false" style="height: 2px;">
        <ul class="nav navbar-nav">
          <li class=""><a href="###">课程</a></li>
          <li class=""><a href="###">路径</a></li>
          <li class=""><a href="###">比赛</a></li>
          <li class=""><a href="###">讨论</a></li>
          <li class=""><a href="###">训练营</a></li>
          <li class=""><a href="###">会员</a></li>              
        </ul>  
        <ul class="nav navbar-nav navbar-right header-sign">
          <li><a class="sign-in">登录</a></li>
          <li><a class="sign-up">注册</a></li>
        </ul>            
        <div class="navbar-form index-form">
          <span class="glyphicon glyphicon-search"></span>
          <input type="text" class="form-control" placeholder="搜索 课程/问答">
        </div>
      </div>
    </div>
  </nav>
  <ListItem></ListItem>
</div>
</template>

<script>
import ListItem from './list-items/List-items.vue'
export default {
  components: {
    ListItem
  }
};
</script>

<style lang="scss" scoped>
$headerHeight: 150px;
$nbBrandH: 70px;
$color: #08bf91;
.index-nav {
  position: relative;
  height: $headerHeight ;
}
.index-page-header {
  position: relative;
  @media screen and (min-width: 768px) {
    height: $headerHeight;
    .pc-navbar {
      display: block;
    }
    .ph-navbar {
      display: none;
    }
    
    .index-page-navbar {
      height: $headerHeight;
      border-width: 0;
    }
  }

  @media screen and (max-width: 768px) {
    height: $nbBrandH;
    .pc-navbar {
      display: none;
    }
    .ph-navbar {
      display: block;
    }
    .index-page-navbar {
      height: $nbBrandH;
      border-width: 0;
    }
  }


  .index-navbar-brand {
    height: $nbBrandH;
    padding: 5px 0;
  }

  .logoword {
    display: inline-block;
    font-size: 18px;
    margin-top: 23px;
    color: #274a59;
  }
  .navbar-toggle {
    margin-top: 18px;
  }
  #item-list {
    border-width: 0;
    li{
      a {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;
        text-align: center;
        &:active {
          color: $color;
        }
      }      
      &:last-child a{
        background: $color;
        color: #fff;
      }
    }
  }
  .navbar-option {
    margin-top: 18px;
    a {
      font-size: 16px;
      padding: 12px 25px;
    }
    li {
      position: relative;
    }
    .company {
      padding: 6px 22px !important;
      margin: 5px 25px 0 0;
      border: 1px solid #08bf31;
      border-radius: 30px;
      color: $color;
      &:hover {
        color: $color;
      }
    }
    .login {
      color: #666;
      &:hover {
        background: #eeeeee;
      }
    }
    .register {
      background: $color;
      color: #fff;
      &:hover {
        background: #1ad1a3;
        color: #fff;
      }
    }
    .notice {
      position: absolute;
      right: -5px;
      top: 15px;
      height: 18px;
      overflow: hidden;
      width: 175px;
      color: #979797;
      span {
        vertical-align: top;
        font-size: 16px;
      }
      ul {
        display: inline-block;
        vertical-align: top;
        list-style: none;
        margin-block-end: 0;
        padding: 0;
        width: 150px;
        position: relative;
        li {
          font-size: 12px;
          height: 20px;
          position: absolute;
          cursor: pointer;
          &:first-child {
            top: 0;
            animation: first-scroll 4s infinite;
          }
          &:last-child {
            top: 20px;
            animation: second-scroll 4s infinite;
          }
        }
      }
    }
  }

  .navbar-title {
    transform: translateY(90px);
    background: #fff;
    height: 60px;
    ul {
      margin-top: -70px;
      width: 100%;
    }
    .all-course a {
      width: 260px;
      background: $color;
      font-size: 16px;
      color: #fff;
      &:link,
      &:visited,
      &:hover,
      &:active {
        background: $color;
        color: #fff;
      }
    }
    li a {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 16px;
      &:hover {
        color: $color;
      }
    }
    .navbar-form {
      position: relative;
      margin-top: 12px;
      margin-right: 0px;
      input {
        width: 232px;
        padding-right: 35px;
        padding-left: 10px;
      }
      span {
        position: absolute;
        top: 0;
        right: 15px;
        display: inline-block;
        padding: 10px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}

.home-header {
  height: $nbBrandH;
  background: #fff;
  font-size: 16px;

  .index-navbar-brand {
    padding: 5px 0;
    height: $nbBrandH;
  }

  .index-form {
    position: absolute;
    right: 160px;
    top: 11px;
    span {
      position: absolute;
      top: 0;
      right: 18px;
      display: inline-block;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
    }
    input {
      height: 35px;
      border-radius: 35px;
      padding-right: 35px;
    }
    
  }

  #header-navbar-collapse ul:first-child {
    height: $nbBrandH; 
    padding: 10px 0;
    li a{
      padding-top: 15px;
      padding-bottom: 15px;

      &:hover {
        color: #1ad1a3;
      }
    }
  }
  a.sign-in,
  a.sign-up {
    padding: 25px;
    cursor: pointer;
    &:hover {
      background: #eee !important;
    }
  }
  a.sign-up {
    background: $color;
    color: #fff !important;
    &:hover {
      background: #1ad1a3 !important;
      color: #fff !important;
    }
  }
}
@keyframes first-scroll {
  0% {top: 0;opacity: 1;}
  25% {top: -20px;opacity: 0;}
  50% { top: 20px;opacity: 0;}
  75% {top: 0;opacity: 1;}
}
@keyframes second-scroll {
  0% {top: 20px;opacity: 0;}
  25% {top: 0;opacity: 1;}
  50% {top: 0;opacity: 1;}
  75% {top: -20px;opacity: 0;}
  100% {top: 20px;opacity: 0;}
}
</style>



