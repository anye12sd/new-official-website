<template>
  <div class="title-text">
    <div class="title">{{msg.name}}<span class="title1">{{ msg.name2 }}</span></div>
    <div class="eng-title">{{ msg.eng }}</div>
  </div>
</template>

<script>
export default {
  name: "TitleText",
  props: ['msg'],
}
</script>

<style scoped>
  .title-text{
    animation-name: bounceIn1 ;
    animation-duration: 1.5s;
  }
  .title{
    background: url("../assets/img/qb8p.png") no-repeat center;
    text-align: center;
    font-size: 24px;
    color: #000;
  }
  .title1{
    color: #F08C4B;
  }
  .eng-title{
    text-align: center;
    color: rgb(153, 153, 153);
    font-size: 18px;
    margin-top: 8px;
  }
</style>