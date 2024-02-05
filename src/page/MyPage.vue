<template>
    <!-- <section class="mypage_section"> -->
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <div class="back">
        <div class="mypage_box">
            <section class="section2">
                <div class="section2_div1">
                    <div>
                        <div class="user_setting"></div>
                        <ul class="account">
                            <li style="
                                        font-weight: 700;
                                        font-size: 20px;
                                        padding-right: 10px;
                                        ">
                                {{member.nickname}} </li>

                            <li style="color: gray; margin-top: 6px">
                                {{ member.email }}
                            </li>

                        </ul>
                        <RouterLink to='/mypage/setting'>
                            <button class="user_btn" id="open_modal">
                                <i class="fa-solid fa-gear setting_hover"></i>
                            </button>
                        </RouterLink>
                    </div>
                    <div class="user_info">
                        <div>
                            <ul>
                                <li style="list-style: none">
                                    <div class="user_photo">
                                        <div class="user_photo2"></div>
                                    </div>
                                </li>
                                <li class="user_add">
                                    <a href="/follower" class="follow">0<br />팔로우</a>
                                </li>
                                <li class="user_add">
                                    <a href="/following" class="follow">1<br />팔로잉</a>
                                </li>
                            </ul>
                        </div>
                        <div class="myComentList">
                            <a href="/mycomment" class="myComentList2">
                                <span class="myComentList_span">1</span>
                                <span class="myComentList_span">코멘트/평가</span>
                            </a>
                            <div class="line"></div>
                            <!-- <router-link :to="'/collection'"> -->
                            <a href="/collection" class="myComentList2">
                                <!-- <a class="myComentList2"> -->
                                <span class="myComentList_span">4</span>
                                <span class="myComentList_span">컬렉션</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import { useMemberStore } from '@/stores/useMemberStore';
import { useCollectionStore } from '@/stores/useCollectionStore';
import { mapStores } from 'pinia'
import VueJwtDecode from "vue-jwt-decode";

export default {
    data(){
        return {
            member: {email: "", nickname: "", image: ""}
        }
    },
    computed: {
        ...mapStores(useMemberStore, useCollectionStore)
    },

    components: {
    },

    mounted() {
        this.member.email = VueJwtDecode.decode(sessionStorage.getItem("aToken")).username;
        this.member.nickname = VueJwtDecode.decode(sessionStorage.getItem("aToken")).nickname;
        this.member.image = VueJwtDecode.decode(sessionStorage.getItem("aToken")).image;

    }
}

</script>



<style scoped>
a {
    text-decoration: none;
    color: black;
}


li {
    list-style: none;
}

.mypage_section {
    padding-top: 62px;
    padding-bottom: unset;
    min-width: 719px;
    box-sizing: border-box;
    display: block;
}

.back {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    min-width: 719px;
}

.mypage_box {
    background: rgb(248, 248, 248);
    width: 640px;
    padding: 0 20px 100px;
    margin: 40px auto 0;
    box-sizing: border-box;
    user-select: none;
    display: block;
}

.mypage_box2 {
    border: 1px solid rgb(227, 227, 227);
    border-radius: 6px;
    background-color: #f7f7f8;
    width: 100%;
    overflow: auto;
}

.section2 {
    margin: 0;
    background-color: #fff;
    width: 100%;
}

.section2_div1 {
    position: relative;
}

.user_setting {
    padding-top: 100px;
    margin: 0px 0px -82.5px;
}

.user_btn {
    padding: 0;
    border: none;
    margin: 0;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    outline: none 0px;
    appearance: initial;
    font-size: 100%;
    background-color: white;
    font-size: 15px;

}

.setting_hover:hover {
    color: gray;
}

.user_info {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 30px 16px;
    border-bottom: solid 13px rgb(248, 248, 248);
}

.user_photo {
    
    padding-top: 135px;
    width: 135px;
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
}

.user_photo2 {
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
    inset: 0;
    z-index: 1;
    display: block;
    position: absolute;
    background: url("https://practice-2023.s3.ap-northeast-2.amazonaws.com/2024/02/04/ff4795f5-6b94-42b1-a705-184cac7c5e86_img.jpeg") center center / cover no-repeat;
}

.user_add {
    position: relative;
    float: right;
    list-style: none;
    justify-content: center;
    padding-right: 80px;
    text-align: center;
    bottom: 100px;

}

.user_name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px 0px;
    width: 100%;
    box-sizing: border-box;
}

.follow {
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: small;
}

.myComentList {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    padding: 0px 15px;
    border-top: 1px solid rgb(244, 244, 247);
    margin-top: 50px;
}

.myComentList_span {
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    text-align: center;
}

.line {
    background-color: rgb(232, 232, 239);
    width: 1px;
    height: 12px;
    box-sizing: border-box;
    display: block;
}

.myComentList2 {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    text-align: center;
    box-sizing: border-box;
    width: calc(50%);
    height: 100%;
    padding: 12px 0px;
}

.account {
    font-size: 14px;
    font-weight: 500;
    padding-left: 40px;
    margin-bottom: 20px;
    color: black;
    display: flex;
}
</style>