<template>
  <section class="detail-movie_info border-bottom">
    <!-- 영화 이미지 배너 -->
    <div class="detail-banner_wrapper">
      <div class="filter"></div>
      <img src=" " />
    </div>

    <div class="d-flex gap-4 basic-info">
      <div class="detail-poster_wrapper">
        <img id="filename" :src="axiosContent.filename" alt="" />
      </div>
      <div class="d-flex flex-column">
        <h1 id="name" class="mt-5">
          <b>{{ axiosContent.name }} </b>
        </h1>
        <span id="categoryId" class="mb-2 text-secondary font-15"
          >카테고리: {{ axiosContent.categoryName }}</span
        >
        <!-- 장르 이름 backend수정중 -->
        <div class="mb-1 py-2 d-flex border-top border-bottom font-15">
          <span class="color-pink">예상평점 ★3</span>
        </div>
        <div class="d-flex gap-4">
          <div class="d-flex flex-column align-items-center">
            <!--  <span class="text-secondary font-12">평가하기</span> -->
          </div>
        </div>

        <div class="d-flex gap-4 align-items-center">
          <form
            class="detail-like-forms d-flex align-items-center"
            data-detail-id="{{ detail.id }}"
          >
            <button
              type="submit"
              class="d-flex align-items-center gap-2 feature-btn border-0 bg-transparent detail-like_btn"
              id="like-{{ detail.id }}"
            >
              <span class="material-symbols-outlined">add</span>
              <span>보고싶어요</span>
            </button>
          </form>

          <router-link @click="navigateToComment" :to="`/detail/${id}/comment`">
            <a
              type="button"
              id="open_modal"
              class="d-flex align-items-center gap-2 feature-btn"
            >
              <span class="material-symbols-outlined">edit</span>
              <span class="font-14">코멘트</span>
            </a>
          </router-link>
          <!--  :title="detail.title" -->
          <a href="#" class="d-flex align-items-center gap-2 feature-btn">
            <span class="material-symbols-outlined">visibility</span>
            <span class="font-14">보는중</span>
          </a>
          <a href="#" class="d-flex align-items-center gap-2 feature-btn">
            <span class="material-symbols-outlined">more_horiz</span>
            <span class="font-14">더보기</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <div class="detail-info">
      <div class="border bg-white p-4">
        <!-- 내가 좋아할 이유 -->
        <!-- {% comment %}  -->
        <div class="d-flex flex-column gap-3 mb-4">
          <div id="temp">
            <template
              v-for="(comment, index) in contentCommentList"
              :key="index"
            >
              <div v-if="comment.member['id'] == myId">
                <div
                  class="d-flex justify-content-between align-items-center border-bottom mb-3"
                >
                  <a href="#" class="d-flex align-items-center gap-2 py-2">
                    <div class="profile-image-form">
                      <img :src="comment.member['image']" alt="" />
                    </div>
                    <div>
                      <b>{{ comment.member["nickname"] }} </b>
                    </div>
                  </a>
                  <div class="comment-score font-14">★{{ comment.rate }}</div>
                </div>

                <div
                  class="comment-content border-bottom font-15"
                  id="recomment-content"
                >
                  {{ comment.comment }}
                </div>
                <div
                  class="d-flex align-items-center justify-content-between gap-4"
                >
                  <div class="d-flex gap-2">
                    <a
                      type="button"
                      id="recomment-update"
                      class="d-flex align-items-center justify-content-center gap-2 mt-3 chat-like_btn"
                    >
                      <div class="font-14 text-secondary">수정</div>
                    </a>
                    <form
                      action="{% url 'posts:recomment_delete' detail.id comment.id recomment.id %}"
                      method="POST"
                      class="d-flex align-items-center justify-content-center gap-2 mt-3 chat-like_btn"
                    >
                      <input
                        type="submit"
                        class="font-14 text-secondary border-0 bg-transparent p-0"
                        value="삭제"
                        onclick="return confirm('삭제 하시겠습니까?')"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </template>
          </div>

        </div>
 
<hr>
        <!-- 기본 정보 -->
        <div class="mb-4 pb-3 border-bottom">
          <div class="d-flex justify-content-between mb-2">
            <h2><b>기본 정보</b></h2>
          </div>
          <div class="text-secondary font-15">별점 그래프</div>
          <div class="text-secondary font-15">간단한설명</div>

          <div class="text-secondary font-15">목차</div>
          <div class="text-secondary font-15">기타등등</div>
        </div>

        <!-- 출연진 -->
        <div class="mb-4 pb-3">
          <div class="d-flex justify-content-between mb-2">
            <h2><b>저자</b></h2>
          </div>
          <div class="row w-100">
            <!-- {% for credit in credits %} -->
            <div class="col-6 d-flex align-items-center gap-2 pb-2 mb-2">
              <div class="credit-image_form">
                <img src=" " alt="" />
              </div>
              <div class="credit-info border-bottom">
                <div class="font-17">작가이름 : {{ axiosContent.writerName }}</div>
              
              </div>
            </div>
            <div class="col-6 d-flex align-items-center gap-2 pb-2 mb-2"></div>
          </div>
        </div>

        <!-- 코멘트 -->
        <div>
          <div class="d-flex justify-content-between mb-3">
            <h2 class="d-flex gap-2">
              <b>코멘트</b
              ><span class="color-pink">{{ contentCommentList.length }}</span>
            </h2>
            <!-- {% if comments %} -->
            <a :href="`/detail/${id}/comments`" class="color-pink">더보기</a>
            <!-- {% endif %} -->
          </div>

          <!-- todo  flex? grid? 로 딱 3 개 맞추기 -->

          <ul class="card-wrapper gap-3">
            <!-- :class="{ active: index === 0 }" -->
            <!-- 3개 기본값 if 없으면ㄴㄴ  -->
            <!-- proxy in proxy배열 -->

            <template
              v-for="(comment, index) in contentCommentList"
              :key="index"
            >
              <li class="comment-card" v-if="index < 3">
                <!-- <div v-if="contentCommentList.length < 3">
                <div v-if="contentCommentList.length - index < 1"></div>
              </div> -->

                <div v-if="index <= 2">
                  <div
                    class="d-flex justify-content-between align-items-center border-bottom mb-3"
                  >
                    <a href=" " class="d-flex align-items-center gap-2 py-2">
                      <div class="profile-image-form">
                        <img :src="comment.member['image']" alt="" />
                      </div>
                      <div>
                        <b>{{ comment.member["nickname"] }}</b>
                      </div>
                    </a>
                    <div class="comment-score font-14">★{{ comment.rate }}</div>
                  </div>
                  <a href=" ">
                    <div class="comment-content border-bottom">
                      {{ comment.comment }}
                    </div>
                  </a>
                  <div
                    class="d-flex align-items-center gap-3 border-bottom mb-2"
                  >
                    <div class="d-flex align-items-center gap-2 py-2">
                      <span
                        class="material-symbols-outlined text-secondary font-15"
                        >thumb_up</span
                      >
                      <div
                        class="font-14"
                        id="like-count-{{ detail.id }}-{{ comment.id }}"
                      >
                        좋아요수
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <span
                        class="material-symbols-outlined text-secondary font-15"
                        >chat_bubble</span
                      >
                      <div class="font-14">댓글수</div>
                    </div>
                  </div>
                  <form
                    class="comment-like-forms"
                    data-detail-id="{{ detail.id }}"
                    data-comment-id="{{ comment.id }}"
                  >
                    <input
                      type="submit"
                      id="like-{{ detail.id }}-{{ comment.id }}"
                      class="comment-unlike_btn"
                      value="좋아요"
                    />
                  </form>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";
const token = sessionStorage.getItem("aToken");

export default {
  name: "DetailPage",
  components: {},
  data() {
    return {
      id: null,
      axiosContent: {},
      axiosAllComment: [],
      myId: null,
    };
  },
  created() {
    if (token) {
      let ttt = VueJwtDecode.decode(token);
      this.myId = ttt.id;
      console.log(99999);
      console.log(this.myId);
    }
  },
  methods: {
    navigateToComment() {
      // 로그인 여부 확인
      if (token) {
        console.log("ok");
      } else {
        alert("로그인이 필요합니다!"); // 알람 표시
        // event.preventDefault();
        this.$router.push(`/detail/${this.id}`);
        // window.location.href = `${this.id}`;
      }
    },

    async getContent(id) {
      try {
        let response = await axios.get(backend + `/content/${id}`);
        console.log(response.data);
        this.axiosContent = response.data;

        console.log(this.axiosContent);
      } catch (error) {
        console.error(error);
      }
    },

    async getAllComment(page, size) {
      try {
        let response = await axios.get(
          backend + `/comment/list?page=${page}&size=${size}`
        );
        console.log(response.data);
        this.axiosAllComment = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    // $route.params.id를 통해 id 값을 가져옴
    this.id = this.$route.params.id;
    console.log("ID:", this.id);
    this.getContent(this.id);
    this.getAllComment(1, 100); //임의로 100
  },

  computed: {
    contentCommentList() {
      const res = [];
      for (let i = 0; i < this.axiosAllComment.length; i++) {
        if (this.id == this.axiosAllComment[i].content.contentId) {
          res.push(this.axiosAllComment[i]);
        }
      }
      console.log(res);
      //위아래 합치려했는데 안됨
      const response = [];
      for (let i = 0; i < res.length; i++) {
        const myObject = {};
        for (const a in res[i]) {
          myObject[a] = res[i][a];
          console.log(a);
          console.log(res[i][a]);
        }
        console.log(myObject);
        response.push(myObject);
      }
      console.log(response);
      return response;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/detail.css";

.card-wrapper {
  justify-content: center;
}

.comment-content {
  overflow: hidden;
}

#temp > div:nth-child(1) {
  display: block; /* 첫 번째 a 요소는 보이도록 설정 */
}

/* 두 번째부터 모든 a 요소를 숨김 */
#temp > div:nth-child(n + 2) {
  display: none; /* 두 번째부터 모든 a 요소를 숨김 */
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
