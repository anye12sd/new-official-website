<template>
  <div>
    <div class="header flex">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="nav-bar flex">
        <router-link :to="{path: '/'}" tag="div" :class="{'active' : $route.name === 'index'}">网站首页</router-link>
        <router-link :to="{path: '/profile'}" tag="div" :class="{'active' : $route.name === 'profile'}">公司简介</router-link>
        <router-link :to="{path: '/product'}" tag="div" :class="{'active' : $route.name === 'product'}">产品中心</router-link>
        <router-link :to="{path: '/news'}" tag="div" :class="{'active' : $route.name === 'news'||$route.name === 'newsDetail'}">新闻动态</router-link>
        <router-link :to="{path: '/join'}" tag="div" :class="{'active' : $route.name === 'join'}">招商联盟</router-link>
        <router-link :to="{path: '/contact'}" tag="div" :class="{'active' : $route.name === 'contact'}">联系我们</router-link>
      </div>
    </div>
    <div class="banner">
      <div class="about">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/img/banner1.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/banner2.jpg" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="about-text">
          <div class="about-title animate__animated animate__bounceIn">“麻管家” 您身边的生活管家</div>
          <div class="about-subtitle animate__animated animate__bounceIn">线上线下一站式生活服务</div>
          <div class="about-engtitle animate__animated animate__bounceIn">ONE STOP LIVING SERVICE</div>
          <div class="about-btn flex">
            <router-link :to="{path: '/join'}" tag="div" class="about-btn-left animate__animated animate__bounceIn">招商联盟</router-link>
            <router-link :to="{path: '/product'}" tag="div"  class="about-btn-right animate__animated animate__bounceIn">产品中心</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
// let effect = ['slide', 'fade', 'cube', 'coverflow', 'flip']
export default {
  name: "Header",
  data(){
    return{
      swiper: ''
    }
  },
  mounted() {
    this.swiperInit()
  },
  methods: {
    swiperInit(){
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        effect: 'coverflow',
        //如果需要自动切换海报
        autoplay: 3000,
        speed: 1000,
        disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
      })
    },
  }
}
</script>

<style scoped>
.header{
  width: 1900px;
  height: 80px;
  justify-content: space-between;
}
.logo{
  margin-top: 10px;
  margin-left: 150px;
}
.logo img{
  width: 200px;
}
.nav-bar{
  line-height: 80px;
  font-size: 16px;
  margin-right: 150px;
}
.nav-bar div{
  padding: 0 12px;
  margin: 0px 12px;
  transition: .3s ease;
  cursor: pointer;
}
.nav-bar div:hover{
  background: #F08C4B;
  color: #fff;
}
.nav-bar .active{
  background: #F08C4B;
  color: #fff;
}
.swiper-container {
  height: 800px;
  width: 100%;
}
.swiper-slide{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 800px;
  background: #000;
}
.swiper-slide img{
  width: 100%;
  opacity: .6;
  filter: alpha(opacity=60);
}
.swiper-container-horizontal>.swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
  margin: 0 10px;
}
/deep/ .swiper-pagination-bullet{
  width: 16px;
  height: 16px;
  transition: .3s ease;
}
/deep/ .swiper-pagination-bullet:hover{
  background: #F08C4B;
  opacity: 1;
}
/deep/ .swiper-pagination-bullet-active {
  opacity: 1;
  background: #F08C4B;
}
.about{
  position: relative;
}
.about-text {
  font-size: 34px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 260px;
  z-index: 1000;
  width: 1000px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.about-title, .about-subtitle, .about-engtitle, .about-btn-left, .about-btn-right{
  animation-name: bounceIn1 ;
  animation-duration: 1.5s;
}
.about-subtitle{
  margin-top: 20px;
}
.about-engtitle{
  margin-top: 20px;
  font-size: 26px;
}
.about-btn{
  justify-content: space-between;
  padding: 0 350px;
  font-size: 14px;
  margin-top: 50px;
}
.about-btn-left, .about-btn-right{
  background: #F08C4B;
  cursor: pointer;
  color: #fff;
  border-radius: 2px;
  width: 120px;
  height: 30px;
  line-height: 30px;
}
</style>