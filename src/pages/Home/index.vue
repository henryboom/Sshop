<template>
    <div>
        <!-- 三级联动组件已经注册为全局组件，无需引入 -->

        <TypeNav></TypeNav>
        <div>
            <button>点击我加一</button>
            仓库的数据： {{ count }}
            <button>点击我减一</button>
        </div>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from '@/pages/Home/Recommend'
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import reqCategoryList from "@/api/index";
import { mapState } from "vuex";

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
    computed: {
        // 以下相当于  
        // count() {
        //     //console.log(this.$store.state.count)
        //     return this.$store.state.home.count;
        // }
         ...mapState(['home/count'])
    },
    mounted() {
        // console.log(nprogress);
        // this.$nextTick(() => {
        //     // 在下一个DOM更新周期中执行操作
        //     // 可以安全地访问computed属性
        //     console.log(count);
        // });
        console.log(this.$store.state.home.count);
        
    },
    beforeDestroy() {
        // console.log(count);
    }
}
</script>

<style lang="less" scoped></style>