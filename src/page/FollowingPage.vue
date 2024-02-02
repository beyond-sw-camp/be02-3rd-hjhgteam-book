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
            <div class="back">
                <div class="follow_box">
                    <section class="section2">
                        <div class="section2_div1">
                            <div>
                                <div class="follow"></div>
                                <ul class="follow_title">
                                    <li style="font-weight: 700; font-size: 20px; padding-right: 10px;">팔로잉</li>
                                </ul>
                            </div>
                            <ul class="follow_ul">
                                <FollowingListComponent></FollowingListComponent>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
    </body>

    </html>
</template>

<script>
import FollowingListComponent from '../components/FollowingListComponent.vue'

export default{

    components: {
        FollowingListComponent
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

.follow_section {
    padding-top: 62px;
    padding-bottom: unset;
    min-width: 719px;
    box-sizing: border-box;
    display: block;
}

.follow_list {
    box-sizing: border-box;
    width: 100%;
    padding: 15px 30px 16px;
    border-bottom: solid 13px rgb(248, 248, 248);

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
    /* 높이 지정 나중에 수정하기 */
     height: 500px;
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

.follow_title {
    font-size: 14px;
    font-weight: 500;
    padding-left: 40px;
    padding-bottom: 20px;
    color: black;
    display: flex;
    border-bottom: rgb(248, 248, 248) solid 1px;
}

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


</style>