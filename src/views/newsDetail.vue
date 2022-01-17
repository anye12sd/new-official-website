<template>
  <div>
    <Header></Header>
    <div>
      <title-text class="title-text" :msg="{name: '新闻', name2: '动态', eng: 'NEWS INFORMATION'}"></title-text>
    </div>
    <div class="news-detail" v-if="news.content.title">
      <div class="news-title">{{ news.content.title }}</div>
      <div class="news-author flex">
        <div>来源： 星星点点</div>
        <div>发布时间：2021年</div>
        <div>538次 浏览</div>
      </div>
      <p>
        {{ news.content.title }}。{{ news.content.text }}
      </p>
<!--      <div class="next-page flex">-->
<!--        <div class="prev">上一篇：</div>-->
<!--        <div class="next">下一篇：</div>-->
<!--      </div>-->
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import newsList from '../utils/news.json'
export default {
  name: "newDetail",
  data(){
    return{
      id: '',
      newsList,
      news: {content: {title: '', text: ''}}
    }
  },
  mounted() {
    this.id = this.$route.query.id || 1
    this.news = newsList.find(item => item.id == this.id)
    console.log(this.news)
  }
}
</script>

<style scoped>
.title-text{
  margin-top: 40px;
}
.news-title{
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.news-detail{
  margin-top: 40px;
  min-height: 400px;
}
.news-author{
  margin: 0 auto;
  width: 400px;
  justify-content: space-between;
}
.news-author div{
  margin: 13px 16px;
}
.news-detail p{
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  text-indent: 28px;
}
.next-page{
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 14px;
}
.next-page div{
  transition: .2s ease;
  color: #333;
  cursor: pointer;
}
.next-page div:hover{
  color: #F08C4B;
}
</style>