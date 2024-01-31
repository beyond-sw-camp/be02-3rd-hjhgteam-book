<template>
  <LoginComponent />
  <SignupComponent />
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";

export default {
  name: "MainPage",
  components: {
    LoginComponent,
    SignupComponent,
  },
};
</script>

<style scoped></style>
