<template>
    <li class="content_li">
        <a href="#">
            <div class="content_li_div">
                <div class="content_img">
                    <img
                        class="img_class"
                        src="https://practice-2023.s3.ap-northeast-2.amazonaws.com/2024/01/17/16e48730-0058-48e1-b8b2-1854b522ea4e_image1.jpg"
                    />
                </div>
                <div class="content_div2"></div>
            </div>
            <div class="content_name">
                <div class="content_name2">화산귀환</div>
            </div>
            <div class="content_rate">
                <div class="content_rate2">4점</div>
            </div>
        </a>
    </li>
    <li class="content_li">
        <a href="#">
            <div class="content_li_div">
                <div class="content_img">
                    <img
                        class="img_class"
                        src="https://practice-2023.s3.ap-northeast-2.amazonaws.com/2024/02/01/94f3d9a9-29a6-478a-aa8a-cd69d1389f70_%EB%A7%88%EB%A3%A8%EB%8A%94%EA%B0%95%EC%A5%90.jpg"
                    />
                </div>
                <div class="content_div2"></div>
            </div>
            <div class="content_name">
                <div class="content_name2">마루는 강쥐</div>
            </div>
            <div class="content_rate">
                <div class="content_rate2">5점</div>
            </div>
        </a>
    </li>
</template>

<script></script>

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
