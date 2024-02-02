import { createRouter, createWebHistory } from "vue-router";

import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";
import ChatListPage from "../page/ChatListPage.vue";
import ChatRoomPage from "../page/ChatRoomPage.vue";
import MainPage from "../page/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/login", component: LoginComponent },
    { path: "/signup", component: SignupComponent },
    { path: "/chatlist", component: ChatListPage },
    {
      path: "/chat",
      component: ChatRoomPage,
      props: (route) => ({ roomName: route.query.roomName }),
    },
  ],
});

export default router;
