<template>
    <HeaderComponent />
    <!-- <div class="main"> -->
        <router-view></router-view>
    <!-- </div> -->
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
       
        HeaderComponent,
        FooterComponent,
    },
};
</script>

<style>
.main{
    /* height: 500px; */
    text-align: center;
}
</style>
