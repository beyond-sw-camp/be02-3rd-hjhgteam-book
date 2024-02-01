<template>
    <HeaderComponent />
    <MainPage />
    <router-view></router-view>
    <FooterComponent />
</template>

<script>
import MainPage from "./page/MainPage.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
    name: "App",
    components: {
        MainPage,
        HeaderComponent,
        FooterComponent,
    },
};
</script>

<style>
#app {
    text-align: center;
}
</style>
