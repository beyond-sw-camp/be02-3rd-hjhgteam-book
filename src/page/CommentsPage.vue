<template>
    <div class="border-bottom bg-white p-3 pb-2 comments-nav" id="comments-nav">
        <a href="{% url 'posts:detail' detail_pk %}">
            <span class="material-symbols-outlined color-pink">keyboard_backspace</span>
        </a>
        <h5 id="comments-title"><b>코멘트</b></h5>
    </div>

    <div class="container">
        <!-- 반복 -->
        <li v-for="(comment, index) in contentCommentList" :key="index" class="comment-card">
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
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
            <a href="{% url 'posts:comment' comment.movie comment.id %}">
                <div class="comment-content border-bottom">
                    {{ comment.comment }}
                </div>
            </a>
            <div class="d-flex align-items-center gap-3 border-bottom mb-2">
                <div class="d-flex align-items-center gap-2 py-2">
                    <span class="material-symbols-outlined text-secondary font-15">thumb_up</span>
                    <div class="font-14">test1</div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <span class="material-symbols-outlined text-secondary font-15">chat_bubble</span>
                    <div class="font-14">test1</div>
                </div>
            </div>
            <form class="comment-like-forms">
                <input type="submit" class="comment-unlike_btn" value="좋아요" />
            </form>
        </li>
    </div>
</template>

<script>
import axios from "axios";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
    name: "CommnetsPage",
    data() {
        return {
            id: null,

            axiosAllComment: [],
        };
    },
    methods: {
        async getAllComment(page, size) {
            try {
                let response = await axios.get(backend + `/comment/list?page=${page}&size=${size}`);
                console.log(response.data);
                this.axiosAllComment = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getAllComment(1, 100); //임의로 100
    },
    components: {},
    created() {},
    computed: {
        contentCommentList() {
            const res = [];
            for (let i = 0; i < this.axiosAllComment.length; i++) {
                if (this.id == this.axiosAllComment[i].content.contentId) {
                    res.push(this.axiosAllComment[i]);
                }
            }
            console.log(res);
            // 위 아래 합치면 될꺼같은데 안됨 이유 모름
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
@import "../assets/css/comments.css";
.comment-card {
    width: 700px;
    border-radius: 15px;
}
</style>
