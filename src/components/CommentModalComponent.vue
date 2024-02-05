<template>
  <div class="modal_div modal-dialog modal-dialog-centered">
    <div class="modal-content w-60 p-3">
      <!-- 코멘트 타이틀 -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h6 class="m-0"><b>{{axiosContent.name}}</b></h6>
        <router-link :to="`/detail/${id}`">
          <button type="button" class="btn-close"></button>
        </router-link>
      </div>
      <!-- 코멘트 입력부분 -->
      <form
        action=""
        method="POST"
        class="d-flex flex-column log-input w-100 gap-2"
      >
        <textarea
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
                <span class="rating_star" :style="{ width: starWidth }"
                  >★★★★★</span
                >
                <input
                  type="range"
                  v-model="ratingC"
                  step="1"
                  min="0"
                  max="10"
                /> 
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

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
  name: "CommentModal",
  props: {},
  data() {
    return {
      id: null,
      ratingC: 0,
      axiosContent: {},
      commentReq: {
        comment: "",
        contentId: "",
        rate: "",
      },
    };
  },
  mounted() {
    // $route.params.id를 통해 id 값을 가져옴
    this.id = this.$route.params.id; 
    console.log("id:", this.id);
    this.getContent(this.id);
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
  },
  computed: {
    starWidth() {
      return `${this.ratingC * 10}%`;
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

.modal-content{
    top:25%;
    width: 60%;
    margin: auto;
    background-color: papayawhip;
    border-radius: 30px;
}
</style>
