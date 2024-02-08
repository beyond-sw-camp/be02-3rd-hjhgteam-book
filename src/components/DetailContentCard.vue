<!-- 컬렉션 목록에서 해당 컬렉션의 상세페이지의 card -->
<template>
    <li class="content_li">
        <a href="#">
            <div class="content_li_div">
                <div class="content_img">
                    <!-- <img class="img_class" -->
                    <!-- :src="`${detail.contentImage}`" /> -->
                    <img class="img_class" src="https://image-comic.pstatic.net/webtoon/814543/thumbnail/thumbnail_IMAG21_df84a681-b7ef-4dda-8cef-25b219d35e3e.jpg" />
                </div>
                <div class="content_div2"></div>
            </div>
            <div class="content_name">
                <div class="content_name2">마음의 소리</div>
            </div>
        </a>
    </li>
    <li class="content_li">
        <a href="#">
            <div class="content_li_div">
                <div class="content_img">
                    <!-- <img class="img_class" -->
                    <!-- :src="`${detail.contentImage}`" /> -->
                    <img class="img_class" src="https://image-comic.pstatic.net/webtoon/817945/thumbnail/thumbnail_IMAG21_120ad315-8518-4430-bb30-739654b49635.jpg" />
                </div>
                <div class="content_div2"></div>
            </div>
            <div class="content_name">
                <div class="content_name2">어린이집 다니는 구나</div>
            </div>
        </a>
    </li>
</template>

<script>
export default {};
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
    font-size: 14px;
    letter-spacing: -0.3px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    padding-top: 10px;
    text-align: center;
}
</style>
