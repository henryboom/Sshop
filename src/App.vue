<template>
  <div id="app">
    <Header></Header>
    <!-- //路由显示的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
            //使用vuex发送请求，获取数据存储与vuex中
            this.$store.dispatch('categoryList');//第一个参数是路径,第二个参数是传值
        //如果不是Home路由组件，将typeNav进行隐藏
        if (this.$route.path != "/home") {
            this.show = false;
        }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
