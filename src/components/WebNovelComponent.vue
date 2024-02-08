<template>
    <li class="content_li" v-for="myComment in myCommentList" :key="myComment.id">
        <a href="#">
            <div>
                <div class="content_li_div">
                    <div class="content_img">
                        <img class="img_class" :src='`${myComment.content.contentImage}`'>

                    </div>
                    <div class="content_div2"></div>
                </div>
                <div class="content_name">
                    <div class="content_name2">{{ myComment.content.contentName }}</div>
                </div>
                <div class="content_rate">
                    <div class="content_rate2">{{ myComment.rate }}점</div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
import axios from 'axios';
import { mapStores } from 'pinia'
import VueJwtDecode from "vue-jwt-decode";

// import { useCommentStore } from '@/stores/useCommentStore';

export default {
    data() {
        return {
            commentList: [],
            member: { id: "" },
            myCommentList: [],
            myCommentCount: ""
        }
    },

    computed: {
        ...mapStores()
    },

    methods: {
        async getcommentList(page, size) {
            const backend = "http://www.bookspedia.kro.kr/api";
            // let aToken = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1c3duMTI4MUBuYXZlci5jb20iLCJpZCI6MSwibmlja25hbWUiOiLtgaztgaztgaztgawiLCJpbWFnZSI6Imh0dHBzOi8vcHJhY3RpY2UtMjAyMy5zMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3MuY29tLzIwMjQvMDIvMDQvMTMzY2IzNGYtYjRiYi00NDI1LTk2NWEtODg1OTdmZjJlNWU5X2ltZy5qcGVnIiwiaWF0IjoxNzA3MjAwNjk0LCJleHAiOjEwMjQzMjA0MTg0OTUyMDB9.HY6f-eneiuRszBjpCH6DSbWsbZ06LirFGTaiohxN89E"

            // const backend ="http://localhost:8080"
            let myId = VueJwtDecode.decode(sessionStorage.getItem("aToken")).id;
            // let myId = VueJwtDecode.decode(aToken).id;

            let response = await axios.get(backend + "/comment/list?page=" + page + "&size=" + size);
            this.commentList = response.data;

            console.log(this.commentList);

            this.member.id = myId;

            this.commentList.forEach(comment => {
                if (this.member.id === comment.member.id && comment.content.contentClassify === false) {
                    this.myCommentList.push(comment);
                    console.log(comment)
                }

                // this.myCommentCount = this.myCommentList.length;
            });
        },
    },

    mounted() {
        // this.commentStore.getcommentList(1, 10);
        this.getcommentList(1, 200);
    }
}
</script>


<style scoped>
.content_li {
    width: 24%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 5px;
    margin: 0 0 24px;
}

.content_li_div {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
}

.content_img {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #eae9e8;
    border-radius: 5px;
    background: #f8f8f8;
    transition: 300ms;
}

.img_class {
    vertical-align: top;
    width: 100%;
    height: 100%;
    min-height: 1px;
    object-fit: cover;
    transition: opacity 420ms ease 0s;
    border-style: none;
}

.content_div2 {
    padding-top: 6px;
    padding-right: 6px;
    display: flex;
}

.content_name {
    text-align: center;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
}

.content_name2 {
    text-align: center;
    font-size: 14px;
    letter-spacing: -0.3px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    padding-top: 10px;
}

.content_rate {
    text-align: center;
    width: calc(100% - 10px);
    margin: 0px 10px 0 0;
}

.content_rate2 {
    text-align: center;
    font-size: 12px;
    letter-spacing: -0.3px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    /* padding-top: 5px; */
}
</style>