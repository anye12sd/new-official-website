<template>
  <div>
    <Header></Header>
    <div>
      <title-text class="title-text" :msg="{name: '招商', name2: '联盟', eng: 'CHINA MERCHANTS ASSOCIATION'}"></title-text>
    </div>
    <p class="join-word">你宝贵的意见，是我们前进的方向。</p>
    <p class="join-word">拨打我们的全国咨询热线，同样可以咨询，欢迎您的来电：</p>
    <p class="tel">400-7626-576</p>
    <div class="content1">
      <div class="form">
        <div class="flex">
          <p class="label">姓名：</p>
          <input type="text" placeholder="">
          <p class="xing"></p>
        </div>
        <div class="flex">
          <p class="label">电话：</p>
          <input type="text" placeholder="">
          <p class="xing"></p>
        </div>
        <div class="flex address-outbox">
          <p class="label">地址：</p>
          <input type="text" placeholder="请选择" v-model="addressSelected" class="triangle" readonly @click.stop="showAddress = !showAddress">
          <p class="xing"></p>
          <div class="address-box flex" :class="{'showAddress': showAddress}">
            <div class="province">
              <template v-for="(item, index) in province">
                <div class="province-index" :key="index" @click.stop="chooseCity(item)">{{item}}</div>
              </template>
            </div>
            <div class="city">
              <template v-for="(item, index) in city">
                <div class="city-index" :key="index" :title="item.name" @click.stop="chooseArea(item.name)">{{item.name}}</div>
              </template>
            </div>
            <div class="area" v-if="area.length">
              <template v-for="(item, index) in area">
                <div class="area-index" :key="index" :title="item" @click.stop="chooseAddress(item)">{{item}}</div>
              </template>
            </div>
          </div>
        </div>
<!--        <div class="flex">-->
<!--          <p class="label">验证码：</p>-->
<!--          <input type="text" placeholder="">-->
<!--          <img class="verity-img" src="../assets/img/test.png" alt="">-->
<!--          <p class="verity-button">换一张</p>-->
<!--          <p class="xing"></p>-->
<!--        </div>-->
        <div class="submit-button">提交</div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import provinceList from "@/utils/address";
export default {
  name: "join",
  data(){
    return {
      province: [],
      provinceSelected: '',
      city: [],
      citySelected: '',
      area: [],
      areaSelected: '',
      addressSelected: '',
      showAddress: false
    }
  },
  mounted() {
    this.province = provinceList.map(item => item.name)
    this.city = provinceList.find(item => item.name === this.province[0]).cityList
  },
  methods: {
    chooseCity(val){
      this.area = []
      this.provinceSelected = val
      this.city = provinceList.find(item => item.name === val).cityList
    },
    chooseArea(val){
      this.citySelected = val
      this.area = this.city.find(item => item.name === val).areaList
    },
    chooseAddress(val){
      this.showAddress = false
      this.areaSelected = val
      this.addressSelected = this.provinceSelected + ' ' + this.citySelected + ' ' +this.areaSelected
    }
  }
}
</script>

<style scoped>
.title-text{
  margin-top: 40px;
  margin-bottom: 35px;
}
.join-word{
  text-align: center;
  font-size: 14px;
  line-height: 200%;
  color: rgb(136, 136, 136);
}
.tel{
  text-align: center;
  color: #F08C4B;
  font-size: 24px;
  line-height: 200%;
}
.content1 .form{
  padding: 0 180px;
  margin-top: 20px;
}
.content1 .form .flex{
  margin-top: 50px;
}
.content1 .label{
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
  line-height: 57px;
  width: 110px;
}
.content1 input{
  border: 1px solid #707070;
  width: 410px;
  height: 45px;
  line-height: 45px;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  color: #1a1a1a;
  font-size: 18px;
  padding-left: 30px;
}
.content1 .xing{
  background: url("../assets/img/xing.png") no-repeat right;
  width: 30px;
  height: 45px;
}
.content1 .triangle{
  background: url("../assets/img/triangle.png") no-repeat 395px;
  cursor: pointer;
}
.content1 .verity-img{
  width: 100px;
  height: 38px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
}
.content1 .verity-button{
  color: #999;
  font-size: 20px;
  margin-left: 20px;
  line-height: 57px;
  cursor: pointer;
}
.submit-button{
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 70px;
  width: 360px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  font-weight: bold;
  background: #666666;
  color: #fff;
  text-align: center;
}
.address-outbox{
  position: relative;
}
.address-box{
  position: absolute;
  top: 13px;
  left: 140px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  background: #fff;
  transition: .5s ease;
  opacity: 0;
  z-index: -1;
}
.showAddress{
  top: 6px;
  left: 140px;
  opacity: 1;
  z-index: 10;
}
.province, .city, .area{
  overflow: auto;
  max-height: 250px;
  border-right: 1px solid #e8e8e8;
}
.province-index, .city-index, .area-index{
  width: 85px;
  font-size: 16px;
  color: #314659;
  height: 32px;
  line-height: 32px;
  padding-left: 15px;
  background: #fff;
  cursor: pointer;
  transition: .2s ease;
  overflow: hidden;
}
.province-index:hover, .city-index:hover, .area-index:hover{
  background: #e6f7ff;
}
</style>