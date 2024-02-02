import { createRouter, createWebHistory } from "vue-router";


import LoginComponent from "../components/LoginComponent.vue";
import SignupComponent from "../components/SignupComponent.vue";
import ChatListPage from "../page/ChatListPage.vue";
import ChatRoomPage from "../page/ChatRoomPage.vue";
import MainPage from "../page/MainPage.vue";
import CommentsPage from "../page/CommentsPage.vue";
import DetailPage from "../page/DetailPage.vue"; 
import SearchPage from "../page/SearchPage.vue";
// 마이페이지 라우터
import MyPage from "@/page/MyPage.vue";
import MyUpdateComponent from "../components/MyUpdateComponent.vue";
import UserPage from "@/page/UserPage.vue";
import FollowingPage from "@/page/FollowingPage.vue";
import FollowerPage from "@/page/FollowerPage.vue";
import CollectionListPage from "@/page/CollectionListPage.vue";
import CollectionDetailPage from "@/page/CollectionDetailPage.vue";
import MyCommentPage from "@/page/MyCommentPage.vue";

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

    
    // 마이페이지 라우터
    {
      path: "/mypage",
      component: MyPage,
      children: [{ path: "setting", component: MyUpdateComponent }]
    },
    { path: "/userpage", component: UserPage },
    { path: "/following", component: FollowingPage },
    { path: "/follower", component: FollowerPage },
    { path: "/collection", component: CollectionListPage },
    { path: "/collectiondetail/:id", component: CollectionDetailPage },
    { path: "/mycomment", component: MyCommentPage, },

  ],
});

export default router;
