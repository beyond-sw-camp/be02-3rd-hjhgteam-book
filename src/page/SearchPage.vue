<template>
  <div class="search-result d-flex align-items-center border-bottom">
    <div class="container">ㅁㅁㅁ 의 검색결과</div>
  </div>

  <div class="container search-content">
    <!-- 콘텐츠 -->
    <div>
      <h2>소설 콘텐츠</h2>

      <!-- todo 전부 캐로젤 없이 더보기로 ,  콘텐츠 5x2 10개표시가로 ,컬렉션??,인물10개표시세로,유저 10개표시세로 넘어가는거-->
      <!-- 컬렉션 콘텐츠 인물 유저 에대한 검색 더보기 페이지 필요 -->

      <!-- {% if search_movies %} -->
      <ul class="card-wrapper">
        <!-- 반복 -->
        <li class="card">
          <a href="#">
            <div class="image-wrapper">
              <img
                src=""
                alt="..."
              />
            </div>
            <div class="card-body">
              <div class="card-text">제목</div>
              <div>
                <span>날짜</span>
              </div>
            </div>
          </a>
        </li>        
      </ul>


      <!-- {% else %}
        <div>영화가 없습니다.</div>
        {% endif %}-->
    </div>
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

<style>
@import "../assets/css/base.css";
@import "../assets/css/search.css";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
