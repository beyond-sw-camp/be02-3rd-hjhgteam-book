<template>
    <div class="container mb-5">
        <section class="index-category">
            <div class="index-category_title">
                <b>순위</b>
            </div>
            <div id="rankCarousel" class="carousel carousel-dark slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div
                        v-for="(chunk, index) in chunkedLists1"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                    >
                        <div class="row">
                            <ul class="card-wrapper">
                                <li v-for="(movie, movieIndex) in chunk" :key="movieIndex" class="card">
                                    <ContantCard v-bind:dataObj="movie"></ContantCard>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    id="prevBtn"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#rankCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    id="nextBtn"
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#rankCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </section>

        <section class="index-category">
            <div class="index-category_title">
                <b>컬렉션1</b>
            </div>
            <div id="collectCarousel" class="carousel carousel-dark slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div
                        v-for="(chunk, index) in chunkedLists2"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                    >
                        <div class="row">
                            <ul class="card-wrapper">
                                <li v-for="(movie, movieIndex) in chunk" :key="movieIndex" class="card">
                                    <ContantCard v-bind:dataObj="movie"></ContantCard>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    id="prevBtn"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#collectCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    id="nextBtn"
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#collectCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </section>

        <section class="index-category">
            <div class="index-category_title">
                <b>컬렉션axios</b>
                <!-- id 수정 3개 -->
            </div>
            <div id="collectCarousel2" class="carousel carousel-dark slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div
                        v-for="(chunk, index) in chunkedLists3"
                        :key="index"
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                    >
                        <div class="row">
                            <ul class="card-wrapper">
                                <li v-for="(movie, movieIndex) in chunk" :key="movieIndex" class="card">
                                    <ContantCard v-bind:dataObj="movie"></ContantCard>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    id="prevBtn"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#collectCarousel2"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    id="nextBtn"
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#collectCarousel2"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
let testList = [
    {
        rank: 0,
        title: "순정말고 순종",
        author: "슈안",
        img_url:
            "https://image-comic.pstatic.net/webtoon/761461/thumbnail/thumbnail_IMAG21_e3c857a7-900b-4085-969a-75d9127b5a38.jpg",
    },
    {
        rank: 1,
        title: "12시네점심",
        author: "조석",
        img_url:
            "https://image-comic.pstatic.net/webtoon/819217/thumbnail/thumbnail_IMAG21_2dd78d6c-ba3d-4d1d-8b98-30c13d90144d.jpg",
    },
    {
        rank: 2,
        title: "뷰티풀 군바리",
        author: "설이 / 윤성원",
        img_url:
            "https://image-comic.pstatic.net/webtoon/648419/thumbnail/thumbnail_IMAG21_d9398229-cbfd-47dc-9208-0a6fb936f3a7.jpg",
    },
    {
        rank: 3,
        title: "왕과의 야행",
        author: "보리",
        img_url:
            "https://image-comic.pstatic.net/webtoon/817859/thumbnail/thumbnail_IMAG21_4fadf2ae-3467-4a9d-a6be-4b0313b963e0.jpg",
    },
    {
        rank: 4,
        title: "백수세끼",
        author: "치즈",
        img_url:
            "https://image-comic.pstatic.net/webtoon/733074/thumbnail/thumbnail_IMAG21_80df3e76-47af-4007-b57c-e8f2830835e5.jpg",
    },
    {
        rank: 5,
        title: "신의 탑",
        author: "SIU",
        img_url:
            "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
    },
    {
        rank: 6,
        title: "퀘스트지상주의",
        author: "박태준 만화회사, 유누니 / 박태준 만화회사, 태완",
        img_url:
            "https://image-comic.pstatic.net/webtoon/783052/thumbnail/thumbnail_IMAG21_800f4c56-26ac-419e-9ed0-baf322311dea.jpg",
    },
    {
        rank: 7,
        title: "장씨세가 호위무사",
        author: "김인호 / 조형근",
        img_url:
            "https://image-comic.pstatic.net/webtoon/728750/thumbnail/thumbnail_IMAG21_47c21251-b213-4882-bacc-15adce1acfc8.jpg",
    },
    {
        rank: 8,
        title: "윈드브레이커",
        author: "조용석",
        img_url:
            "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
    },
    {
        rank: 9,
        title: "버림받은 왕녀의 은밀한 침실",
        author: "혜니 / 성혜림",
        img_url:
            "https://image-comic.pstatic.net/webtoon/796867/thumbnail/thumbnail_IMAG21_77aa5064-b42b-4838-912e-2c6266c53a74.jpg",
    },
    {
        rank: 10,
        title: "앵무살수",
        author: "김성진",
        img_url: "https://image-comic.pstatic.net/webtoon/739115/thumbnail/thumbnail_IMAG21_7077747896626722102.jpg",
    },
    {
        rank: 11,
        title: "신화급 귀속 아이템을 손에 넣었다",
        author: "정선율 / 헤스",
        img_url:
            "https://image-comic.pstatic.net/webtoon/795297/thumbnail/thumbnail_IMAG21_ceeeead6-8a9c-48ec-a793-f3cc092a0b10.jpg",
    },
    {
        rank: 12,
        title: "소녀의 세계",
        author: "모랑지",
        img_url: "https://image-comic.pstatic.net/webtoon/654774/thumbnail/thumbnail_IMAG21_4048794550434817075.jpg",
    },
    {
        rank: 13,
        title: "팔이피플",
        author: "매미 / 희세",
        img_url:
            "https://image-comic.pstatic.net/webtoon/774863/thumbnail/thumbnail_IMAG21_e390eaf4-cfcd-46bf-901f-93034135a314.jpg",
    },
    {
        rank: 14,
        title: "별난식당",
        author: "HO9",
        img_url:
            "https://image-comic.pstatic.net/webtoon/806189/thumbnail/thumbnail_IMAG21_292de414-bd9a-418d-a4e9-d97060398223.jpg",
    },
    {
        rank: 15,
        title: "절대검감",
        author: "김두루미 / 티아이 / 한중월야",
        img_url:
            "https://image-comic.pstatic.net/webtoon/796075/thumbnail/thumbnail_IMAG21_31f75c4c-81c9-454a-8d92-9e23b577e1a5.jpg",
    },
    {
        rank: 16,
        title: "어린이집 다니는 구나",
        author: "구나",
        img_url:
            "https://image-comic.pstatic.net/webtoon/817945/thumbnail/thumbnail_IMAG21_120ad315-8518-4430-bb30-739654b49635.jpg",
    },
    {
        rank: 17,
        title: "우아한 욕망",
        author: "김종건",
        img_url:
            "https://image-comic.pstatic.net/webtoon/813552/thumbnail/thumbnail_IMAG21_c81f8080-3781-4789-9411-a171d501b01a.jpg",
    },
    {
        rank: 18,
        title: "퍼니게임",
        author: "배진수",
        img_url:
            "https://image-comic.pstatic.net/webtoon/801035/thumbnail/thumbnail_IMAG21_01fd148f-edb2-4ada-9571-910981ec3376.jpg",
    },
    {
        rank: 19,
        title: "만렙돌파",
        author: "성불예정, 임형 / 미노",
        img_url: "https://image-comic.pstatic.net/webtoon/759940/thumbnail/thumbnail_IMAG21_3976787538998813497.jpg",
    },
    {
        rank: 20,
        title: "진주",
        author: "백두 / 백승훈, 백두",
        img_url:
            "https://image-comic.pstatic.net/webtoon/818588/thumbnail/thumbnail_IMAG21_1819294f-07f1-439c-8a25-7bd880840fef.jpg",
    },
];

import axios from "axios";
import ContantCard from "../components/ContantCardComponent.vue";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
    name: "MainPage",
    data() {
        return { testList, axiosList: [] };
    },
    methods: {
        async getAllContant(page, size) {
            try {
                let response = await axios.get(backend + `/content/list?page=${page}&size=${size}`);

                console.log(response.data);
                this.axiosList = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    components: {
        ContantCard,
    },
    created() {
        this.getAllContant(1, 12);
    },
    computed: {
        chunkedLists1() {
            const chunkSize = 5;
            const chunks = [];
            for (let i = 0; i < this.testList.length; i += chunkSize) {
                chunks.push(this.testList.slice(i, i + chunkSize));
            }
            return chunks;
        },
        chunkedLists2() {
            const chunkSize = 6;
            const chunks = [];
            for (let i = 0; i < this.testList.length; i += chunkSize) {
                chunks.push(this.testList.slice(i, i + chunkSize));
            }
            return chunks;
        },
        chunkedLists3() {
            const chunkSize = 6;
            const chunks = [];
            for (let i = 0; i < this.axiosList.length; i += chunkSize) {
                chunks.push(this.axiosList.slice(i, i + chunkSize));
            }
            return chunks;
        },
    },
};
</script>

<style scoped>
@import "../assets/css/index.css";

#collectCarousel .card {
    /* collectCarousel 속한 .card의 CSS 스타일을 여기에 추가하세요 */
    width: calc(100% / 6);
    /* 등분 */
}
</style>
