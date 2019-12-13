<template>
    <div id="app">
        <header-nav></header-nav>
        <router-view/>
    </div>
</template>

<script>
    import HeaderNav from '@/modules/index/header.vue'
    export default {
        name: 'App',
        components: {
            HeaderNav
        },
    }
</script>

<style>
    @import url("assets/css/common.css");
</style>