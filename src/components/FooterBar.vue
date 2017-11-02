<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4" style="min-height: 150px;">
          <img src="https://static.shiyanlou.com/img/logo-white.png" alt="logo">
          <div class="footer-slogan">
            动手做实验，轻松学IT
          </div>
          <div class="col-xs-2">
            <a href="#" class="link"><i class="glyphicon glyphicon-envelope" style="color: #36bd4c;"></i></a>
          </div>
          <div class="col-xs-2">
            <a href="#" class="link"><i class="glyphicon glyphicon-star" style="color: #ee4451;"></i></a>
          </div>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="col-title">公司</div>
          <a href="##">关于我们</a>
          <br>
          <a href="##">联系我们</a>
          <br>
          <a href="##">加入我们</a>
          <br>
          <a href="##">技术博客</a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="col-title">合作</div>
          <a href="###">我要投稿</a>
          <br>
          <a href="###">教师合作</a>
          <br>
          <a href="###">高校合作</a>
          <br>
          <a href="###">友情链接</a>
          <br>
          <a href="###">开发者</a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="col-title">服务</div>
          <a href="###">企业版</a>
          <br>
          <a href="###">实战训练营</a>
          <br>
          <a href="###">会员服务</a>
          <br>
          <a href="###">实验报告</a>
          <br>
          <a href="###">常见问题</a>
          <br>
          <a href="###">隐私条款</a>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="col-title">学习路径</div>
          <a href="###">Python学习路径</a>
          <br>
          <a href="###">Linux学习路径</a>
          <br>
          <a href="###">大数据学习路径</a>
          <br>
          <a href="###">Java学习路径</a>
          <br>
          <a href="###">PHP学习路径</a>
          <br>
          <a href="###">全部</a>
        </div>
      </div>
    </div>
    <div class="copy-right text-center">
      Copyright @2013-2017 实验楼XXXXXX | XXXXXXXXXX
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 20px;
  background: #333;
  a {
    display: inline-block;
    margin-bottom: 3px;
    color: #999;
    font-size: 14px;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  .col-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: hsla(0,0%,100%,.5);
  }
  .footer-slogan {
    margin: 0 0 12px 15px;
    color: #0c9;
    font-size: 28px;
  }
  .copy-right {
    height: 50px;
    margin-top: 20px;
    color: #666;
    background: #171919;
    line-height: 50px;
  }
  .link {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #636469;
    text-align: center;
    i {
      font-size: 16px;
      padding: 7px 0 0 2px;
    }
  }
}
</style>


