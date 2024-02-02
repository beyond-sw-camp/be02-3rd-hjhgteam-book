<template>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
        <section class="mypage_section">
            <div class="back">
                <div class="mypage_box">
                    <section class="section2">
                        <div class="section2_div1">
                            <div>
                                <div class="user_setting"></div>
                                <ul class="account">
                                    <li style="font-weight: 700; font-size: 20px; padding-right: 10px;">hjhg</li>
                                    <li style="color: gray; margin-top: 6px;">bookspedia@test.com</li>
                                </ul>
                            </div>
                            <div class="user_info">
                                <div>
                                    <ul>
                                        <li style="list-style: none">
                                            <div class="user_photo">
                                                <div class="user_photo2"><img src></div>
                                            </div>
                                        </li>
                                        <li class="user_add">
                                            <a href="/FOLLOW.html" class="follow">10<br />팔로우</a>
                                        </li>
                                        <li class="user_add">
                                            <a href="/FOLLOWING.html" class="follow">10<br />팔로잉</a>
                                        </li>
                                    </ul>
                                    <div><button class="follow_btn">팔로우</button></div>
                                </div>
                                <div class="myComentList">
                                    <a href="#" class="myComentList2">
                                        <span class="myComentList_span">0</span>
                                        <span class="myComentList_span">평가</span>
                                    </a>
                                    <div class="line"></div>
                                    <a href="#" class="myComentList2">
                                        <span class="myComentList_span">0</span>
                                        <span class="myComentList_span">코멘트</span>
                                    </a>
                                    <div class="line"></div>
                                    <a href="#" class="myComentList2">
                                        <span class="myComentList_span">0</span>
                                        <span class="myComentList_span">컬렉션</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </body>

    </html>
</template>

<script></script>
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
    min-width: 719px;
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
    background: url("#") center center / cover no-repeat;
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
    width: calc(33.3333%);
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

/* 팔로우 버튼 추가 */
.follow_btn {
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    font-size: 15px;
    background-color: grey;
    color: white;
}

.follow_btn:hover {
    font-weight: 700;
    cursor: pointer;
}</style>