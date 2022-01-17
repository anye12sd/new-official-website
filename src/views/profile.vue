<template>
  <div>
    <Header></Header>
    <title-text class="title-text" :msg="{name: '公司', name2: '简介', eng: 'COMPANY PROFILE'}"></title-text>
    <div class="profile flex">
      <div class="profile-left animate__animated animate__slideInLeft">
        <Video class="video"></Video>
      </div>
      <div class="profile-right animate__animated animate__slideInRight">
        <p>浙江环洁网络科技有限公司成立于2021年初，坐落于“绿水青山、天然氧吧”的浙江丽水绿谷信息产业园，注册资金2000万，是一家以“求真、务实、创新”为理念的互联网企业。</p>
        <p>公司旗下品牌【麻管家】以互联网+社区生活，线上专业平台派单，线下社区门店服务，为消费者倾力打造“最后一公里生活焦点、难点”的大型生活服务平台，实现一站式社区生活新服务。</p>
        <p>随着互联网的不断发展和现代生活的快节奏，人们已不愿将宝贵的时间浪费在生活琐事及家务上，更趋向线上新零售的消费模式。环洁科技经过三年多的市场调研和技术开发，精准设计推出了互联网+社区生活服务平台——【麻管家】品牌。</p>
        <p>强大的技术团队，专业的App软件，贴心的管家服务， 统一的品牌形象，必将颠覆传统产业新变革，引领智能生活新时尚，驱动互联网经济新高峰。</p>
      </div>
    </div>
    <div class="middle-bar">
      <img src="../assets/img/bg.png" alt="">
      <div class="middle-bar-box flex">
        <div class="middle-bar-icon middle-bar-icon1">
          <div class="middle-bar-title">新理念</div>
          <div class="middle-bar-text">打造互联网+社区生活服务平台</div>
        </div>
        <div class="middle-bar-icon middle-bar-icon2">
          <div class="middle-bar-title">新模式</div>
          <div class="middle-bar-text">线上专业平台派单，线下社区门店服务</div>
        </div>
        <div class="middle-bar-icon middle-bar-icon3">
          <div class="middle-bar-title">新服务</div>
          <div class="middle-bar-text">线下社区门店为用户提供服务咨询、投诉受理、售后服务</div>
        </div>
      </div>
    </div>
    <div class="contact">
      <p class="contact-title">如果你有兴趣，赶快联系我们吧！</p>
      <p class="contact-text">If you are interested, please contact us as soon as possible!</p>
      <router-link class="btn" tag="div" :to="{path: '/join'}">招商加盟</router-link>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Video from "@/components/Video";
export default {
  name: "profile",
  components: {Video}
}
</script>

<style scoped>
.title-text{
  margin-top: 40px;
}
.profile{
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.profile-right{
  margin-left: 40px;
  font-size: 16px;
  color: rgb(102, 102, 102);
  letter-spacing: 1px;
  line-height: 200%;
}
.profile-right p{
  text-indent: 34px;
}
.video{
  width: 100%;
  margin-top: 25px;
}
.middle-bar{
  margin-top: 40px;
  position: relative;
}
.middle-bar-box{
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
}
.middle-bar-box .middle-bar-icon{
  margin-left: 30px;
  transition: .3s ease;
}
.middle-bar-box .middle-bar-icon1{
  background: url("../assets/img/middle-bar1.png") no-repeat left;
  background-size: 60px;
  padding-left: 80px;
}
.middle-bar-box .middle-bar-icon2{
  background: url("../assets/img/middle-bar2.png") no-repeat left;
  background-size: 60px;
  padding-left: 80px;
}
.middle-bar-box .middle-bar-icon3{
  background: url("../assets/img/middle-bar3.png") no-repeat left;
  background-size: 60px;
  padding-left: 80px;
  margin-right: 30px;
}
.middle-bar-title{
  font-size: 18px;
  color: #fff;
  transition: .3s ease;
}
.middle-bar-text{
  color: rgb(153, 153, 153);
  font-size: 14px;
  line-height: 1.5;
  margin-top: 15px;
  transition: .3s ease;
}
.middle-bar-box .middle-bar-icon:hover{
  margin-top: -15px;
  color: #F08C4B !important;
}
.middle-bar-box .middle-bar-icon:hover .middle-bar-text,.middle-bar-box .middle-bar-icon:hover .middle-bar-title{
  color: #F08C4B !important;
}
.contact{
  margin-top: 60px;
  text-align: center;
}
.contact-title{
  font-size: 24px;
  color: #F08C4B;
}
.contact-text{
  color: rgb(102, 102, 102);
  margin-top: 15px;
  font-size: 18px;
}
.btn{
  font-size: 14px;
  background: #F08C4B;
  color: #fff;
  width: 160px;
  height: 36px;
  line-height: 36px;
  margin: 0 auto;
  margin-top: 15px;
  cursor: pointer;
}
</style>