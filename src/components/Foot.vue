<template>
  <div class="out">
    <div class="foot flex">
      <div>
        <img src="../assets/img/logo2.png" alt="">
        <p class="address">地址：浙江省丽水市莲都区白云街道绿谷信息产业园山山梦想城A座5楼</p>
        <p class="address">邮箱：13665876577@139.com</p>
        <p class="address">电话：400-7626-576 / 13665876577</p>
      </div>
      <div class="fast">
        <div class="foot-title">快速链接</div>
        <div class="in">
          <router-link tag="div" :to="{path: '/'}">网站首页</router-link>
          <router-link tag="div" :to="{path: '/product'}">产品中心</router-link>
          <router-link tag="div" :to="{path: '/join'}">招商加盟</router-link>
        </div>
        <div class="in">
          <router-link tag="div" :to="{path: '/profile'}">公司简介</router-link>
          <router-link tag="div" :to="{path: '/news'}">新闻动态</router-link>
          <router-link tag="div" :to="{path: '/contact'}">联系我们</router-link>
        </div>
      </div>
      <div class="qrcode">
        <img src="../assets/img/qrcode.jpg" alt="">
        <p class="qrcode-name">微信小程序</p>
      </div>
    </div>
    <div class="beian">©2021 环洁科技 版权所有 <a href="https://beian.miit.gov.cn/#/Integrated/index">浙ICP备2021013665号-2</a></div>
  </div>
</template>

<script>
export default {
  name: "Foot"
}
</script>

<style scoped>
.out{
  background: rgb(51, 51, 51);
  margin-top: 60px;
  padding: 60px;
  padding-bottom: 20px;
}
.foot{
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}
.address{
  font-size: 14px;
  color: rgb(136, 136, 136);
  line-height: 45px;
  padding-left: 15px;
}
.foot div .address:nth-child(2){
  margin-top: 10px;
}
.foot-title{
  font-size: 18px;
  color: #fff;
  margin-top: 15px;
}
.fast .in{
  margin-top: 30px;
}
.fast .in:nth-child(3){
  margin-left: 50px;
}
.fast .in div{
  color: rgb(136, 136, 136);
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  transition: .2s ease;
}
.fast .in div:hover{
  color: #F08C4B;
}
.qrcode-name{
  text-align: center;
  font-size: 16px;
  color: rgb(136, 136, 136);
  margin-top: 20px;
}
.qrcode img{
  width: 160px;
}
.beian{
  color: rgb(136, 136, 136);
  text-align: center;
}
.beian a{
  color: inherit;
  text-decoration: none;
}
</style>