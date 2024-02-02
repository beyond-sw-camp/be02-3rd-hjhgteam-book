<template>
    <HeaderComponent />
    <MainPage />
    <router-view></router-view>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import MainPage from "./page/MainPage.vue";

export default {
    name: "App",
    components: {
        HeaderComponent,
        FooterComponent,
        MainPage,
    },
};
</script>

<style>
#app {
    text-align: center;
}
</style>
