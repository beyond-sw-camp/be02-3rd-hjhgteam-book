<template>
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8" />
        <title>컬렉션 리스트</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
        <!-- <section class="follow_section"> -->
            <div class="back">
                <div class="follow_box">
                    <section class="section2">
                        <div class="section2_div1">
                            <div>
                                <div class="follow"></div>
                                <ul class="comment_title">
                                    <li style="font-weight: 700; font-size: 20px; padding-right: 10px;">코멘트/평가</li>
                                </ul>
                            </div>
                            <ul class="tab">
                                <router-link to="/mycomment/webtoon">
                                    <li class="tab_item active">
                                        웹툰
                                    </li>
                                </router-link>
                                <li class="tab_item">
                                    <a href="#tab2">웹소설</a>
                                </li>
                            </ul>
                            <div>
                                <div id="tab1" class="contentList">
                                    <div class="content_div">
                                        <ul class="content_ul">
                                            <webtoonComment></webtoonComment>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        <!-- </section> -->

    </body>

    </html>
</template>

<script>
import webtoonComment from "../components/WebtoonComponent.vue"

export default {
    components: {
        webtoonComment
    }
}
</script>

<style scoped>
.contentList{
    margin-top: 40px;
}
a {
    text-decoration: none;
    color: inherit;
    font-size: 13px;
}
li{
    list-style-type: none;
}

.tab {
    display: flex;
    align-items: center;
    padding-right: 40px;
}

.tab_item {
    padding: 0.6rem 6.5rem;
    margin-right: 1rem;
    border: 1px solid #ddd;
    border-radius: 2rem;
}

.tab_item.active {
    display: inline-block;
    border: 1px solid #ddd;
    /* background-color: #b81c0f; */
    background-color: lightgrey;
    color: #fff;
}

.tab__content-wrapper {
    padding: 1rem
}

.tab__content {
    display: none;
}

.tab__content.active {
    display: block;
}

.follow_section {
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

.follow_box {
    background: rgb(248, 248, 248);
    width: 640px;
    padding: 0 20px 100px;
    margin: 40px auto 0;
    box-sizing: border-box;
    user-select: none;
    display: block;
}

.section2 {
    margin: 0;
    background-color: #fff;
    width: 100%;
}

.section2_div1 {
    position: relative;
}

.follow {
    padding-top: 100px;
    margin: 0px 0px -82.5px;
}

.content_div {
    margin: 0 20px;
}

.content_ul {
    list-style: none;
    padding: 0;
    margin: 14px -5px 0;
    overflow: hidden;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
}
</style>