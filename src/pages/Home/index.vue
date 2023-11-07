<template>
    <div>
        <!-- 三级联动组件已经注册为全局组件，无需引入 -->
        <!-- <h1>{{ categoryList }}</h1> -->
        <TypeNav></TypeNav>
        <!-- <div>
            <button @click="add">点击我加一</button>
            仓库的数据： {{ count }}
            <button @click="de">点击我减一</button>
        </div> -->
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from '@/pages/Home/Recommend'
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import { mapState, mapMutations } from "vuex"

export default {
    name: 'Home',
    data() {
        return {
            //count:0
        }
    },
    components: {
        ListContainer,
        Recommend,
        Like,
        Rank,
        Floor,
        Brand
    },
    methods: {
        // add(){
        //     // console.log('in comp');

        //     this.$store.dispatch("add");
        // },
        // de(){
        //     this.$store.dispatch("decrement")
        // }

    },
    computed: {
        // 以下相当于  
        // count() {
        //     //console.log(this.$store.state.count)
        //     return this.$store.state.home.count;
        // }
        // ...mapState({
        //     count: state => state.Home.count,
        // })
        ...mapState({
      floorList: (state) => state.Home.floorList,
    }),
        // count(){
        //     return this.$store.state.Home.count
        // }
    },
    mounted() {
        // console.log(nprogress);
        //         在Vue.js中，你通常不能在mounted生命周期钩子中直接调用计算属性。计算属性是根据它们的依赖项动态计算的，而且它们的计算只有在它们的依赖项发生变化时才会触发。
        // 如果你尝试在mounted中调用计算属性，那么这些计算属性可能会在组件渲染之前被计算，这可能会导致不正确的结果或错误。
        // 如果你需要在组件挂载后执行某些操作并且需要计算属性的值，你可以在mounted中访问计算属性，但不要直接调用它们。Vue.js会自动处理依赖关系，确保计算属性在需要时被正确计算。
        // 访问计算属性，不要直接调用它
        // const computedValue = this.count;
        // // 在这里执行你的操作，使用computedValue
        // console.log(computedValue);
        // 设置一个定时器，5秒后执行
        //     this.timer = setTimeout(() => {
        //      this.$router.push(
        // {        name: "Search",
        //         query: {id:1}}
        // 每次挂载就获取floor的数据
        this.$store.dispatch('getFloorList');

        //      );

        //     }, 3000);

    },
    watch: {
        // count:{
        // handler(newValue,oldValue){
        //     console.log('update')
        // }}
        // categoryList:{    

        //       handler(newValue,oldValue){
        //     console.log('update')
        // }}
    }
    // beforeDestroy() {
    //     // console.log(count);
    // }
}
</script>

<style lang="less" scoped></style>