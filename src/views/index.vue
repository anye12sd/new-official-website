<template>
  <div>
    <Header></Header>
    <title-text class="title-text" :msg="{name: '公司', name2: '简介', eng: 'COMPANY PROFILE'}"></title-text>
    <div ref="profile" class="profile flex" v-show="profile">
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
    <div ref="product_title" v-show="product_title">
      <title-text class="title-text" :msg="{name: '产品', name2: '中心', eng: 'PRODUCT CENTER'}"></title-text>
    </div>
    <div class="product-content">
      <div class="img-box flex">
        <div class="img">
          <img src="../assets/img/service1.png" alt="">
          <p class="img-title">衣物洗护</p>
          <p class="img-subtitle">WASH AND PROTECT</p>
          <p class="img-button">线上服务</p>
        </div>
        <div class="img">
          <img src="../assets/img/service2.png" alt="">
          <p class="img-title">养生理疗</p>
          <p class="img-subtitle">HEALTH PRESERVATION</p>
          <p class="img-button">线上服务</p>
        </div>
        <div class="img">
          <img src="../assets/img/service3.png" alt="">
          <p class="img-title">美业彩妆</p>
          <p class="img-subtitle">BEAUTY INDUSTRY COSMETICS</p>
          <p class="img-button">线上服务</p>
        </div>
        <div class="img">
          <img src="../assets/img/service4.png" alt="">
          <p class="img-title">时令果蔬</p>
          <p class="img-subtitle">FRUITS AND VEGETABLES</p>
          <p class="img-button">线上服务</p>
        </div>
      </div>
      <div class="img-box flex">
        <div class="img">
          <img src="../assets/img/service5.png" alt="">
          <p class="img-title">社区超市</p>
          <p class="img-subtitle">SUPERMARKET</p>
          <p class="img-button">线下服务</p>
        </div>
        <div class="img">
          <img src="../assets/img/service6.png" alt="">
          <p class="img-title">社区团购</p>
          <p class="img-subtitle">GROUP BUYING</p>
          <p class="img-button">线下服务</p>
        </div>
        <div class="img">
          <img src="../assets/img/service7.png" alt="">
          <p class="img-title">快递收发</p>
          <p class="img-subtitle">EXPRESS DELIVERY</p>
          <p class="img-button">线下服务</p>
        </div>
        <div class="img">
          <img class="img-black" src="../assets/img/service4.png" alt="">
          <p class="img-title">待发展服务</p>
          <p class="img-subtitle">TO BE DEVELOPED</p>
          <p class="img-button">线下服务</p>
        </div>
      </div>
    </div>
    <div ref="new_title" v-show="new_title">
      <title-text class="title-text" :msg="{name: '新闻', name2: '动态', eng: 'NEWS INFORMATION'}"></title-text>
    </div>
    <div ref="new_content" class="profile flex" v-show="new_content">
      <div class="profile-left animate__animated animate__slideInLeft">
        <img src="../assets/img/6pca.png" alt="">
      </div>
      <div class="profile-right flex-1 animate__animated animate__slideInRight">
        <template v-for="item in newsList">
          <div class="news_list flex" :key="item.id">
            <div class="new_title" @click="toDetail(item.id)">{{ item.content.title }}</div>
            <div class="news_time">2021年</div>
          </div>
        </template>
        <div class="more news_more animate__animated animate__slideInRight">more</div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Video from "@/components/Video";
import newsList from '../utils/news.json'
export default {
  name: "index",
  components: {Video},
  data() {
    return{
      profile: false,
      product_title: false,
      product_more: false,
      new_title: false,
      new_content: false,
      newsList
  }
},
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() { // 实现当滚动到指定位置，触发动画
      // let scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度
      // this.gdjz('earth', 'earth animated bounceInDown', 50)
      let _this = this
      let refArray = [
        {ref: 'profile', show: 'profile'},
        {ref: 'product_title', show: 'product_title'},
        {ref: 'product_more', show: 'product_more'},
        {ref: 'new_title', show: 'new_title'},
        {ref: 'new_content', show: 'new_content'},
      ]
      refArray.forEach((r) => {
        _this.gdjz(r.ref, 20, () => {
          _this[r.show] = true
        })
      })
    },
    gdjz(div, offset, callback) {
      let dom = this.$refs[div] // 等同于document.querySelector('.earth') true
      if (dom) {
        var a, b, c, d;
        d = dom.offsetTop // 元素距离相对父级的高度，这里父级指的是body
        a = eval(d + offset)
        b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop //  获取窗口滚动条高度
        c = document.documentElement.clientHeight || document.body.clientHeight // 获取浏览器可视区的高度
        if (b + c  > a) {
          callback && callback()
        }
      }
    },
    toDetail(id){
      this.$router.push({path: '/newsDetail?id=' + id})
    }
  }
}
</script>

<style scoped>
/*div{*/
/*animation-name:flash ;*/
/*animation-duration: 3s;*/
/*  !*animation:turn 1s linear infinite;*!*/
/*}*/
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
.more {
  background: #F08C4B;
  color: #fff;
  display: inline-block;
  width: 160px;
  text-align: center;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
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
.middle-bar-box .middle-bar-title{
  font-size: 18px;
  color: #fff;
  transition: .3s ease;
}
.middle-bar-box .middle-bar-text{
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


.product-content{
  width: 1200px;
  margin: 0 auto;
}
.product-content .img-box{
  margin-top: 80px;
}
.product-content .img-box:nth-last-child(1){
  margin-top: 50px;
}
.product-content .img-box .img{
  margin-left: 50px;
  background: #000;
  position: relative;
  overflow: hidden;
}
.product-content .img-box .img img{
  transition: .5s ease;
}
.product-content .img-box .img:hover img{
  transform: scale(1.5);
}
.product-content .img-box .img:nth-child(1){
  margin-left: 0;
}
.product-content .img-box .img img{
  width: calc(100% - 2px);
  opacity: .9;
  filter: alpha(opacity=90);
}
.product-content .img-box .img .img-black{
  width: calc(100% - 2px);
  opacity: 0;
  filter: alpha(opacity=0);
}
.product-content .img-box .img .img-title{
  position: absolute;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  left: 34px;
  top: 130px;
}
.product-content .img-box .img .img-subtitle{
  position: absolute;
  font-size: 14px;
  color: #fff;
  left: 34px;
  top: 160px;
  opacity: .4;
}
.product-content .img-box .img .img-button{
  position: absolute;
  border: 1px solid #fff;
  background: rgba(255,255,255,.2);
  border-radius: 8px;
  font-size: 14px;
  left: 34px;
  top: 180px;
  padding: 8px 16px;
  color: #fff;
  opacity: .5;
  cursor: pointer;
}
.product_more{
  margin: 0 auto;
  margin-top: 40px;
  display: block;
  animation-duration: 3s;
}
.news_list{
  justify-content: space-between;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px dashed #999;
}
.new_title{
  cursor: pointer;
  transition: .2s ease;
}
.new_title:hover{
  color: #F08C4B;
}
.news_time{
  font-size: 12px;
  color: #acacac;
}
.news_more{
  margin-top: 40px;
}
</style>