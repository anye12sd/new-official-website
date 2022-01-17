<template>
  <div>
    <Header></Header>
    <div>
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
    <Foot></Foot>
  </div>
</template>

<script>
export default {
  name: "product"
}
</script>

<style scoped>
.title-text{
  margin-top: 40px;
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
.product-content .img-box .img:nth-child(1){
  margin-left: 0;
}
.product-content .img-box .img img{
  transition: .5s ease;
}
.product-content .img-box .img:hover img{
  transform: scale(1.5);
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
</style>