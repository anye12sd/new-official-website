<template>
  <div>
    <Header></Header>
    <title-text  :msg="{name: '联系', name2: '我们', eng: 'CONTACT US'}"></title-text>
    <div class="address-box">
      <p>地址：浙江省丽水市莲都区白云街道绿谷信息产业园山山梦想城A座5楼</p>
      <p>公司邮箱：13665876577@139.com</p>
      <p>联系电话：400-7626-576 / 13665876577</p>
      <div class="map" id="map">
        <img src="../assets/img/map.jpg" alt="">
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import AMap from "AMap"
export default {
  name: "contact",
  data() {
    return {
      map: ''
    }
  },
  mounted() {
    // this.MapInit()
  },
  methods: {
    MapInit(){
      var map = new AMap.Map('map', {
        center: [119.90706135247038, 28.46577883891176], // [纬度，经度]
        resizeEnable: true,
        zoom: 17
      })
      this.map = map
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })

      // 定位点
      this.addMarker([119.90706135247038, 28.46577883891176]);
    },
    addMarker(arriveCoor) {
      let marker = new AMap.Marker({
        icon: new AMap.Icon({
          image: "https://maguanja.oss-cn-hangzhou.aliyuncs.com/GJ/7ec03849f4e08a060fd25dd419425d4e.png", //图片ip
          size: new AMap.Size(52, 52),  //图标大小
          imageSize: new AMap.Size(50,55)
        }),
        position: arriveCoor,
        offset: new AMap.Pixel(-29, -42),
        // 设置是否可以拖拽
        draggable: false,
        cursor: 'move',
        // 设置拖拽效果
        raiseOnDrag: false
      });
      marker.setMap(this.map);
    },
  }
}
</script>

<style scoped>
#map{
  width: 100%;
  height: 500px;
  margin-top: 80px;
}
.title-text{
  margin-top: 40px;
}
.address-box{
  width: 1200px;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 30px;
  color: #333;
}
</style>