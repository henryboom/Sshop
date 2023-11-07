<template>
    <div>
我是搜索
keyword params参数 +++{{keyword}}
    </div>
</template>

<script>
    export default {
        name: "Search",
       props: [
        "keyword"
       ],

    }
</script>

<style lang="less" scoped>

</style>