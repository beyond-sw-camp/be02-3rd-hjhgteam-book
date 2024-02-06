<template>
    <section class="detail-movie_info border-bottom">
        <!-- 영화 이미지 배너 -->
        <div class="detail-banner_wrapper">
            <div class="filter"></div>
            <img src=" " />
        </div>

        <div class="d-flex gap-4 basic-info">
            <div class="detail-poster_wrapper">
                <img id="filename" src=" " alt="" />
            </div>
            <div class="d-flex flex-column">
                <h1 id="name" class="mt-5"><b>웡카 </b></h1>
                <span id="categoryId" class="mb-2 text-secondary font-15">날짜・ 장르1개</span>
                <div class="mb-1 py-2 d-flex border-top border-bottom font-15">
                    <span class="color-pink">예상평점 ★2</span>
                </div>
                <div class="d-flex gap-4">
                    <div class="d-flex flex-column align-items-center">
                        <!--  <span class="text-secondary font-12">평가하기</span> -->
                    </div>
                </div>

                <div class="d-flex gap-4 align-items-center">
                    <form class="detail-like-forms d-flex align-items-center" data-detail-id="{{ detail.id }}">
                        <button
                            type="submit"
                            class="d-flex align-items-center gap-2 feature-btn border-0 bg-transparent detail-like_btn"
                            id="like-{{ detail.id }}"
                        >
                            <span class="material-symbols-outlined">add</span>
                            <span>보고싶어요</span>
                        </button>
                    </form>

                    <router-link :to="`/detail/${id}/comment`">
                        <a type="button" id="open_modal" class="d-flex align-items-center gap-2 feature-btn">
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
                    <h2><b>내가 쓴 코멘트 나오게 해야함 </b></h2>
                    <!-- <div class="d-flex justify-content-between border-bottom pb-2">
                            <div class="text-secondary font-15">선호하는 배우</div>
                            <div class="font-15">조 샐다나</div>
                        </div>
                        <div class="d-flex justify-content-between border-bottom pb-2">
                            <div class="text-secondary font-15">재밌게 본 비슷한 작품</div>
                            <div class="font-15">블랙팬서: 와칸다 포에버</div>
                        </div>
                        <div class="d-flex justify-content-between border-bottom pb-2">
                            <div class="text-secondary font-15">선호하는 태그</div>
                            <div class="font-15">#마블 #우주선</div>
                        </div> -->
                </div>
                <!-- {% endcomment %} -->

                <!-- 기본 정보 -->
                <div class="mb-4 pb-3 border-bottom">
                    <div class="d-flex justify-content-between mb-2">
                        <h2><b>기본 정보</b></h2>
                    </div>
                    <div class="text-secondary font-15">detail.original_title</div>
                    <div class="text-secondary font-15">detail.release_date · genre.name ,genre.name,genre.name,</div>
                    <div class="text-secondary font-15">11분</div>
                    <div class="text-secondary font-15">상세상세</div>
                </div>

                <!-- 출연진 -->
                <div class="mb-4 pb-3">
                    <div class="d-flex justify-content-between mb-2">
                        <h2><b>출연</b></h2>
                    </div>
                    <div class="row w-100">
                        <!-- {% for credit in credits %} -->
                        <div class="col-6 d-flex align-items-center gap-2 pb-2 mb-2">
                            <div class="credit-image_form">
                                <img src=" " alt="" />
                            </div>
                            <div class="credit-info border-bottom">
                                <div class="font-17">이름</div>
                                <div class="text-secondary font-14">캐릭터</div>
                            </div>
                        </div>
                        <div class="col-6 d-flex align-items-center gap-2 pb-2 mb-2">
                            <div class="credit-image_form">
                                <img src=" " alt="" />
                            </div>
                            <div class="credit-info border-bottom">
                                <div class="font-17">이름</div>
                                <div class="text-secondary font-14">캐릭터</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 코멘트 -->
                <div>
                    <div class="d-flex justify-content-between mb-3">
                        <h2 class="d-flex gap-2"><b>코멘트</b><span class="color-pink">100+</span></h2>
                        <!-- {% if comments %} -->
                        <a href="{% url 'posts:comments' detail.id %}" class="color-pink">더보기</a>
                        <!-- {% endif %} -->
                    </div>

                    <!-- todo  flex? grid? 로 딱 3 개 맞추기 -->

                    <ul class="card-wrapper gap-3">
                        <!-- {% endif %} -->
                        <li class="comment-card">
                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                <a href=" " class="d-flex align-items-center gap-2 py-2">
                                    <div class="profile-image-form">
                                        <img src="../assets/logo.png" alt="" />
                                    </div>
                                    <div><b>이름</b></div>
                                </a>
                                <div class="comment-score font-14">★4.5</div>
                            </div>
                            <a href=" ">
                                <div class="comment-content border-bottom">댓글내용</div>
                            </a>
                            <div class="d-flex align-items-center gap-3 border-bottom mb-2">
                                <div class="d-flex align-items-center gap-2 py-2">
                                    <span class="material-symbols-outlined text-secondary font-15">thumb_up</span>
                                    <div class="font-14" id="like-count-{{ detail.id }}-{{ comment.id }}">좋아요수</div>
                                </div>
                                <div class="d-flex align-items-center gap-2">
                                    <span class="material-symbols-outlined text-secondary font-15">chat_bubble</span>
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <router-view></router-view>
</template>

<script>
import axios from "axios";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
    name: "DetailPage",
    components: {},
    data() {
        return {
            id: null,
            axiosContent: {},
            axiosComment: [],
        };
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

        async getAllComment(page, size) {
            try {
                let response = await axios.get(backend + `/comment/list?page=${page}&size=${size}`);

                console.log(response.data);
                this.axiosComment = response.data;
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
        this.getAllComment(1, 100);
    },
    created() {},
    computed: {},
};
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/detail.css";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
