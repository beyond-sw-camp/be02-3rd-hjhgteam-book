<template>
    <div class="container mb-5">
        <section class="index-category">
            <div class="index-category_title">
                <b>컬렉션axios</b>
                <!-- id 수정 3개 -->
            </div>
            <div id="collectCarousel2" class="carousel carousel-dark slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(chunk, index) in chunkedLists3" :key="index" class="carousel-item"
                        :class="{ active: index === 0 }">
                        <div class="row">
                            <ul class="card-wrapper">
                                <li v-for="(webtoon, webtoonIndex) in filteredChunk(chunk)" :key="webtoonIndex" class="card">
                                    <ContantCard v-if="webtoon.classify === classify" :dataObj="webtoon"></ContantCard>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button id="prevBtn" class="carousel-control-prev" type="button" data-bs-target="#collectCarousel2"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button id="nextBtn" class="carousel-control-next" type="button" data-bs-target="#collectCarousel2"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import ContantCard from "../components/ContantCardComponent.vue";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
    name: "MainPage",
    data() {
        return { axiosList: [] };
    },
    props: {
        classify: Boolean,
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
        filteredChunk(chunk) {
            return chunk.filter(webtoon => webtoon.classify === this.classify);
        },
    },
    components: {
        ContantCard,
    },
    created() {
        this.getAllContant(1, 20);
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
