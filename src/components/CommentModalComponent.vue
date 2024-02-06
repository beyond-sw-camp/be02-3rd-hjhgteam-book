<template>
  <div class="modal_div modal-dialog modal-dialog-centered">
    <div class="modal-content w-60 p-3">
      <!-- 코멘트 타이틀 -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h6 class="m-0">
          <b>{{ axiosContent.name }}</b>
        </h6>
        <router-link :to="`/detail/${id}`">
          <button type="button" class="btn-close"></button>
        </router-link>
      </div>
      <!-- 코멘트 입력부분 -->
      <form 
        method="POST"  
        class="d-flex flex-column log-input w-100 gap-2"
        @submit.prevent="createComment"
      >
        <textarea v-model="commentReq.comment"
          name="content"
          id="content"
          type="text"
          cols="30"
          rows="10"
          class="border-0 chat-input"
          placeholder="이 영화에 대한 생각을 자유롭게 표현해주세요."
        ></textarea>
        <span class="rating_box">
          <div class="rating">
            ★★★★★
            <span class="rating_star" :style="{ width: starWidth }">★★★★★</span>
            <input type="range" v-model="commentReq.rate" step="1" min="0" max="10" />
          </div>
        </span>
        <div class="d-flex flex-column align-items-end">
          <input type="submit" value="저장" class="chat-btn border-0 mt-3" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080"; 
const token = sessionStorage.getItem("aToken");
console.log(987)
console.log(token)
// // VueJwtDecode.decode(sessionStorage.getItem("aToken")).username;
let ttt = VueJwtDecode.decode(token);
console.log(ttt.id)
// console.log(ttt)
// // console.log(token.id)


export default {
  name: "CommentModal",
  props: {},
  data() {
    return { 
      id: null, 
      axiosContent: {},
      commentReq: {
        comment: "",
        contentId: "",
        rate: 0,
      },
    };
  },
  created() {
  },
  methods: {
    async getContent(id) {
      try {
        let response = await axios.get(backend + `/content/${id}`);
        console.log(response.data);
        this.axiosContent = response.data;
      } catch (error) {
        console.error(error);
      }
    },

   
 
    async createComment() {
      event.preventDefault();
      try { 
        let response = await axios.post(
          backend + `/comment/create`,
          this.commentReq, {
            headers: {
              Authorization: "Bearer "+ token,
              "Content-Type": "application/json",
            },
          }
        );
        window.location.replace(`/detail/${this.id}`)
        console.log(response); 
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    // $route.params.id를 통해 id 값을 가져옴
    this.id = this.$route.params.id;
    console.log("id:", this.id);
    this.getContent(this.id);
    this.commentReq.contentId=this.id;
    // console.log(123123);
    // console.log(sessionStorage.getItem("aToken")); 
    
  },
  computed: {
    starWidth() {
      return `${this.commentReq.rate * 10}%`;
    },
    
  },
};
</script>

<style scoped>
.modal_div {
  display: block;
  position: fixed;

  inset: 0px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
  overflow: hidden scroll;
  box-sizing: border-box;
  user-select: none;
}

.modal-content {
  top: 25%;
  width: 60%;
  margin: auto;
  background-color: papayawhip;
  border-radius: 30px;
}
</style>
