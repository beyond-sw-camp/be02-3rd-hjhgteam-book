<template>
    <HeaderComponent />

    <div id="modalLogin">
        <LoginComponent />
    </div>
    <div id="modalSignup">
        <SignupComponent />
    </div>

    <div class="main">
        <router-view></router-view>
    </div>

    <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import SignupComponent from "./components/SignupComponent.vue";
 

export default {
    name: "App",
    methods: {},
    components: {
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
},
};
</script>

<style>
#modalLogin {
    display: none;
}
#modalSignup {
    display: none;
}
.main {
    /* height: 500px; */
    text-align: center;
}
</style>
