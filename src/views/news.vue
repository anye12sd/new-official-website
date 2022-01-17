<template>
  <div>
    <Header></Header>
    <div>
      <title-text class="title-text" :msg="{name: '新闻', name2: '动态', eng: 'NEWS INFORMATION'}"></title-text>
    </div>
    <div class="news-box">
      <template v-for="item in newsList">
        <div class="news-list flex" :key="item.id">
          <div class="news-list-title" @click="toDetail(item.id)">{{ item.content.title }}</div>
          <div class="news-list-time">2021年</div>
        </div>
      </template>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import newsList from '../utils/news.json'
export default {
  name: "news",
  data(){
    return {
      newsList,
    }
  },
  methods: {
    toDetail(id){
      this.$router.push({path: '/newsDetail?id=' + id})
    }
  }
}
</script>

<style scoped>
.title-text{
  margin-top: 40px;
}
.news-box{
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.news-list{
  height: 50px;
  line-height: 50px;
  padding: 0 8px;
  justify-content: space-between;
  border-bottom: 1px dashed #999;
}
.news-list-title{
  font-size: 16px;
  color: #5a5a5a;
  cursor: pointer;
  transition: .2s ease
}
.news-list-title:hover{
  color: #F08C4B;
}
.news-list-time{
  font-size: 12px;
  color: #acacac;
}
</style>