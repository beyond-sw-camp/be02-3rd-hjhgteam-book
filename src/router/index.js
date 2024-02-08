import { createRouter, createWebHistory } from "vue-router";

// import LoginComponent from "../components/LoginComponent.vue";
// import SignupComponent from "../components/SignupComponent.vue";
import ChatListPage from "../page/ChatListPage.vue";
import ChatRoomPage from "../page/ChatRoomPage.vue";
import MainPage from "../page/MainPage.vue";
import CommentsPage from "../page/CommentsPage.vue";
import DetailPage from "../page/DetailPage.vue";
import SearchPage from "../page/SearchPage.vue";
import CommentModal from "../components/CommentModalComponent.vue";
// 마이페이지 라우터
import MyPage from "@/page/MyPage.vue";
import MyUpdateComponent from "../components/MyUpdateComponent.vue";
import UserPage from "@/page/UserPage.vue";
import FollowingPage from "@/page/FollowingPage.vue";
import FollowerPage from "@/page/FollowerPage.vue";
import CollectionListPage from "@/page/CollectionListPage.vue";
import CollectionDetailPage from "@/page/CollectionDetailPage.vue";
import MyCommentPage from "@/page/MyCommentPage.vue";
import WebtoonComponent from "../components/WebtoonComponent";
import WebNovelComponent from "@/components/WebNovelComponent";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
      props: (route) => ({
        classify:
          route.query.classify !== undefined
            ? route.query.classify === "true"
            : null,
      }),
    },
    { path: "/detail/:id/comments", component: CommentsPage },
    {
      path: "/detail/:id",
      component: DetailPage,
      children: [{ path: "comment", component: CommentModal }],
    },
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
      children: [
        {
          path: "setting",
          component: MyUpdateComponent,
          beforeEnter: (to, from, next) => {
            const loginUserId = sessionStorage.getItem("aToken").email;
            const routeId = to.params.id;

            if (routeId === loginUserId) {
              next();
            } else {
              next("/");
            }
          },
        },
      ],
    },
    { path: "/userpage", component: UserPage },
    { path: "/following", component: FollowingPage },
    { path: "/follower", component: FollowerPage },
    { path: "/collection", component: CollectionListPage },
    { path: "/collectiondetail/:id", component: CollectionDetailPage },
    { path: "/mycomment", component: MyCommentPage },

    {
      path: "/mycomment",
      component: MyCommentPage,
      children: [
        { path: "webtoon", component: WebtoonComponent },
        { path: "webnovel", component: WebNovelComponent },
      ],
    },
  ],
});

export default router;
