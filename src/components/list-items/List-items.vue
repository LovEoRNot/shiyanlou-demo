<template>
  <div class="container">
    <ul class="item-list">
      <li v-for="(item, key) in itemList" :key="key">
        <div class="inner-item">
          <a href="#" v-for="(intem, key) in item.innerItem" :key="key">{{intem}}</a>
        </div>
        <div class="list-category" :style="{'top': item.top + 'px'}">
          <div class="category-panel">
            <p>{{item.title}}</p>
            <div class="label-name">
              <span v-for="(lname, key) in item.ListCategory.labelName" :key="key"><a hef="###">{{lname}}</a></span>          
            </div>
            <p>课程推荐</p>
            <div class="course-name">
              <p v-for="(cname, key) in item.ListCategory.courseName" :key="key"><a href="#">{{cname}}</a></p>
            </div>
          </div>
        </div>
      </li>
      <div class="index-nav-footer">
        <a href="###">经管专区</a>
        <a href="###">软件库</a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemList: [
        {
          title: '后端开发',
          innerItem: ['后端开发', 'Python', 'PHP'],
          ListCategory: {
            labelName: ['Python', 'PHP', 'Java', 'Ruby', 'Laravel', 'C', 'C++', 'NodeJs', 'Go', 'Flask', 'OpenCV', 'ThinkPHP', '爬虫', 'Django', 'Spring', 'SSM'],
            courseName: ['Python打造漏洞扫描器', 'Laravel 项目实战：仿新浪微博Web应用', 'C++ 实现简易 Docker 容器', 'MyBatis 框架基础入门']
          },
          top: 0
        },
        {
          title: 'Linux运维',
          innerItem: ['Linux运维', 'Linux', 'Shell'],
          ListCategory: {
            labelName: ['Linux', 'Shell', '网络', 'Nginx', 'Ansible', 'Git', 'C++'],
            courseName: ['LVS 集群负载均衡实战', 'Linux系统安装配置VPN服务器', '高级Bash脚本编程指南', 'LAMP部署及配置']
          },
          top: 58,
        },
        {
          title: '云计算与大数据',
          innerItem: ['云计算与大数据', 'Hadoop', 'spark'],
          ListCategory: {
            labelName: ['Hadoop', 'Spark', 'Scala', 'Docker', '机器学习', 'SDN', 'Hbase', 'Hive', 'Mahout', 'Kafka'],
            courseName: ['使用 Flume 收集数据', 'Spark 大数据动手实验', '大数据带你挖掘打车的秘籍', '动手实战学Docker (15个实验+54个视频)']
          },
          top: 116
        },
        {
          title: '数据库',
          innerItem: ['数据库', 'SQL', 'NoSQL'],
          ListCategory: {
            labelName: ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'Redis'],
            courseName: ['MySQL 基础课程', 'MongoDB 基础教程', 'OAuth 2.0 授权原理与实战', 'Redis基础教程']
          },
          top: 174
        },
        {
          title: '信息安全',
          innerItem: ['信息安全', 'Web安全', '安全开发'],
          ListCategory: {
            labelName: ['Web安全', '安全开发', '网络安全', 'Kali', '加密解密', '系统安全', '渗透测试', '信息隐藏'],
            courseName: ['Kali 渗透测试 - 服务器攻击实战（20个实验）', 'ShellShock 攻击实验', 'SET-UID程序漏洞实验', '格式化字符串漏洞实验']
          },
          top: 232
        },
        {
          title: 'Web前端',
          innerItem: ['Web前端', 'HTML5', 'Web'],
          ListCategory: {
            labelName: ["HTML5", "Web", "NodeJS", "HTML", "JavaScript", "jQuery", "Bootstrap", "React", "Vuejs", "CSS"],
            courseName: ['Vuejs2.0 使用教程', 'Bootstrap3.0入门学习', 'Node.js包教不包会', '手把手教你实现 Google 拓展插件']
          },
          top: 230
        },
        {
          title: '计算机专业课',
          innerItem: ['计算机专业课', '新手入门', '算法'],
          ListCategory: {
            labelName: ["新手入门", "算法", "计算机专业课", "设计模式", "汇编"],
            courseName: ['Linux内核分析', '经典算法解题实战', 'C 语言入门教程', 'C++11/14 高速上手教程']
          },
          top: 240
        },
        {
          title: '其他技术',
          innerItem: ['其他技术', 'Swift', 'Windows'],
          ListCategory: {
            labelName: ["Swift", "Windows", "Electron", "Android", "R"],
            courseName: ['深入浅出 Swift 3', 'Ruby基础教程', '《汇编语言（第2版）》郑晓薇编著配套实验', '使用 Githook 实现团队 Coding Review 流程']
          },
          top: 240
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #08bf91;
$wi: 768px;

.item-list {

  @media screen and (max-width: $wi){
    display: none;
  }

  position: absolute;
  width: 260px;
  height: 522px;
  margin: 0;
  padding: 0;
  z-index: 1024;
  list-style: none;
  background: rgba(37, 37, 37, .36);
  li {
    padding: 18px 12px 0;
    box-sizing: border-box; 
    &:hover {
      background: #fff;
      a {
        color: #333;
      }
      .inner-item {
        border-bottom: none;
      }
      .list-category {
        display: block;
      }
    }
    a {
      color: #fff;
      font-size: 12px;
      margin-right: 10px;
      text-decoration: none;
      &:first-child {
        margin-left: 5px;
        font-size: 16px;
      }
      &:hover {
        color: $color;
      }
    }

    .inner-item {
      height: 40px;
      border-bottom: 1px solid #bcbcbc;    
      box-sizing: border-box; 
    }
    .list-category {
      display: none;
      padding: 20px;
      width: 400px;
      position: absolute;
      left: 260px;
      top: 0;
      z-index: 1024;
      background: #fff;
      box-shadow: 2px 0 4px 0 rgba(0,0,0,.2);
      p {
          height: 22px;
          display: inline-block;
          padding: 0 10px;
          line-height: 22px;
          background: #eee;
          margin: 0 0 20px;
          font-size: 14px;
          text-align: center;
        }
      .label-name {   
        margin-bottom: 20px;
        span {
          &:first-child {
            a {
              border-left: 1px solid #666;
            }
          }
        }     
        a {
          display: inline-block;
          padding: 0 8px;
          border-right: 1px solid #666;
          font-size: 12px;
          color: #666;
          margin: 0 0 10px 0;
          cursor: pointer;
          &:hover {
            color: $color;
          }
        }
      }
      .course-name {
        p {
          background: none;
          display: block;
          text-align: left;
          margin: 5px 0;
          a {
            font-size: 12px;
            color: #666;
            &:hover {
              color: $color;
            }
          }
        }
      }
    }
  }
  .index-nav-footer {
    position: absolute;
    bottom: 20px;
    left: 25px;
    text-align: center;

    a {
      display: inline-block;
      width: 88px;
      height: 26px;
      line-height: 26px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 28px;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        background: #ffffff;
        color: #333;
      }
    }
  }
}
</style>

