<template>
  <div
    class="border-bottom bg-white mt-5 p-3 pb-2 comments-nav"
    id="comments-nav"
  >
    <a href="{% url 'posts:detail' detail_pk %}">
      <span class="material-symbols-outlined color-pink"
        >keyboard_backspace</span
      >
    </a>
    <h5 id="comments-title"><b>코멘트</b></h5>
  </div>

  <div class="container">
    <!-- 반복 -->
    <li class="comment-card">
      <div
        class="d-flex justify-content-between align-items-center border-bottom mb-3"
      >
        <a
          href="{% url 'accounts:profile' comment.user.username %}"
          class="d-flex align-items-center gap-2 py-2"
        >
          <div class="profile-image-form">
 
            <img src="../assets/logo.png" alt="" />

          </div>
          <div>
            <!--  -->
            <b>유저1 </b>
          </div>
        </a>
        <div class="comment-score font-14">★{{ testList[0].rate }}</div>
      </div>
      <a href="{% url 'posts:comment' comment.movie comment.id %}">
        <div class="comment-content border-bottom">
          {{ testList[0].comment }}
        </div>
      </a>
      <div class="d-flex align-items-center gap-3 border-bottom mb-2">
        <div class="d-flex align-items-center gap-2 py-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >thumb_up</span
          >
          <div class="font-14"  >
            test1
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >chat_bubble</span
          >
          <div class="font-14">test1</div>
        </div>
      </div>
      <form
        class="comment-like-forms"   > 
        <input
          type="submit" 
          class="comment-unlike_btn"
          value="좋아요"
        /> 
      </form>
    </li>


    <li class="comment-card">
      <div
        class="d-flex justify-content-between align-items-center border-bottom mb-3"
      >
        <a
          href="{% url 'accounts:profile' comment.user.username %}"
          class="d-flex align-items-center gap-2 py-2"
        >
          <div class="profile-image-form">
 
            <img src="../assets/logo.png" alt="" />

          </div>
          <div>
            <!--  -->
            <b>유저1 </b>
          </div>
        </a>
        <div class="comment-score font-14">★{{ testList[0].rate }}</div>
      </div>
      <a href="{% url 'posts:comment' comment.movie comment.id %}">
        <div class="comment-content border-bottom">
          {{ testList[0].comment }}
        </div>
      </a>
      <div class="d-flex align-items-center gap-3 border-bottom mb-2">
        <div class="d-flex align-items-center gap-2 py-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >thumb_up</span
          >
          <div class="font-14"  >
            test1
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >chat_bubble</span
          >
          <div class="font-14">test1</div>
        </div>
      </div>
      <form
        class="comment-like-forms"   > 
        <input
          type="submit" 
          class="comment-unlike_btn"
          value="좋아요"
        /> 
      </form>
    </li>
    <li class="comment-card">
      <div
        class="d-flex justify-content-between align-items-center border-bottom mb-3"
      >
        <a
          href="{% url 'accounts:profile' comment.user.username %}"
          class="d-flex align-items-center gap-2 py-2"
        >
          <div class="profile-image-form">
 
            <img src="../assets/logo.png" alt="" />

          </div>
          <div>
            <!--  -->
            <b>유저1 </b>
          </div>
        </a>
        <div class="comment-score font-14">★{{ testList[0].rate }}</div>
      </div>
      <a href="{% url 'posts:comment' comment.movie comment.id %}">
        <div class="comment-content border-bottom">
          {{ testList[0].comment }}
        </div>
      </a>
      <div class="d-flex align-items-center gap-3 border-bottom mb-2">
        <div class="d-flex align-items-center gap-2 py-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >thumb_up</span
          >
          <div class="font-14"  >
            test1
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="material-symbols-outlined text-secondary font-15"
            >chat_bubble</span
          >
          <div class="font-14">test1</div>
        </div>
      </div>
      <form
        class="comment-like-forms"   > 
        <input
          type="submit" 
          class="comment-unlike_btn"
          value="좋아요"
        /> 
      </form>
    </li>


    
  </div>
</template>

<script>
let testList = [
  {
    id: 1,
    comment: "댓글 테스트",
    rate: 3,
    member: [],
    content: [],
  },
];

export default {
  name: "IndexPage2",
  data() {
    return { testList };
  },
  methods: {},
  components: {},
  created() {},
  computed: {
    // 잘 응답받은거 뿌려주자
    // chunkedLists1() {
    //   const chunkSize = 5;
    //   const chunks = [];
    //   for (let i = 0; i < this.testList.length; i += chunkSize) {
    //     chunks.push(this.testList.slice(i, i + chunkSize));
    //   }
    //   return chunks;
    // },
  },
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/comments.css";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
