import { createRouter, createWebHistory } from "vue-router";


import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";
import ChatListPage from "../page/ChatListPage.vue";
import ChatRoomPage from "../page/ChatRoomPage.vue";
import MainPage from "../page/MainPage.vue";
import CommentsPage from "../page/CommentsPage.vue";
import DetailPage from "../page/DetailPage.vue"; 
import SearchPage from "../page/SearchPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/login", component: LoginComponent },
    { path: "/signup", component: SignupComponent },
    { path: "/detail/1/comments", component: CommentsPage },
    { path: "/detail/1", component: DetailPage }, 
    { path: "/search/1", component: SearchPage },
    { path: "/chatlist", component: ChatListPage },
    {
      path: "/chat",
      component: ChatRoomPage,
      props: (route) => ({ roomName: route.query.roomName }),
    },
  ],
});

export default router;
