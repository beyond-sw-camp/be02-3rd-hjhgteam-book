<template>
    <li class="follow_li" v-for="(follower, index) in followerList" :key="index">
        <a class="follow_a" href="#">
            <div class="photo">
                <div class="photo2">
                    <div class="photo3"></div>
                </div>
            </div>
            <div class="follow_info">
                <div class="info_text">
                    <div class="info_name1">
                        <div class="info_name2">{{ follower }}</div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return { followerList: [], followercount: "" };
    },

    methods: {
        async getFollowerList() {
            try {
                const backend = "http://www.bookspedia.kro.kr/api";
                let aToken = sessionStorage.getItem("aToken");
                let response = await axios.get(backend + "/follow/list/followers", {
                    headers: {
                        Authorization: "Bearer " + aToken,
                    },
                });
                this.followerList = response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },

        components: {},
    },

    mounted() {
        this.getFollowerList();
    },
};
</script>

<style scoped>
.follow_ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
    box-sizing: border-box;
    display: block;
}

.follow_li {
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
    user-select: none;
    display: list-item;
    list-style: none;
    padding-left: 40px;
}

.follow_a {
    height: 104px;
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    outline: rgb(0, 0, 0);
    box-sizing: border-box;
    user-select: none;
    /* border-bottom: solid 1px rgb(248, 248, 248); */
}

.photo {
    position: relative;
    box-sizing: border-box;
    user-select: none;
    display: block;
    color: inherit;
}

.photo2 {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    border: none;
    margin: 0px 11px 0px 0px;
}

.photo3 {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
    position: relative;
    z-index: 1;
    background: url(https://practice-2023.s3.ap-northeast-2.amazonaws.com/2024/02/%EA%B8%B0%EB%B3%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.png)
        center center / cover no-repeat;
    width: 100%;
    height: 100%;
}

.follow_info {
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info_text {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 10px 0px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info_name1 {
    color: rgb(30, 30, 30);
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    box-sizing: border-box;
    user-select: none;
}

.info_name2 {
    font-weight: 400;
    letter-spacing: -0.7px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(41, 42, 50);
    font-size: 16px;
    line-height: 21px;
    margin-bottom: -1px;
    box-sizing: border-box;
}

.follow_name3 {
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    white-space: nowrap;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.follow_name4 {
    font-weight: 400;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(116, 116, 123);
    font-size: 13px;
    line-height: 17px;
}

.comment_title {
    font-size: 14px;
    font-weight: 500;
    padding-left: 40px;
    padding-bottom: 20px;
    color: black;
    display: flex;
}
</style>
