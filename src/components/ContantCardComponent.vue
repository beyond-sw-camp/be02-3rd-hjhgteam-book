<template>
    <!-- classify  0: 웹툰, 1: 웹소설 -->
    <router-link :to="`/detail/${dataObj.id}`">
        <div class="image-wrapper">
            <div class="rank-marker">{{ dataObj.id }}</div>
            <img :src="dataObj.filename" alt="..." />
        </div>
        <div class="card-body">
            <div class="card-text">{{ dataObj.name }}</div>
            <div>
                <!-- {{ dataObj.author }} -->
                <div class="color-pink">{{ axiosAuthor.name }}</div>
            </div>
        </div>
    </router-link>
</template>
<script>
import axios from "axios";

// const backend = 'https://www.lonuashop.kro.kr/api';
const backend = "http://3.34.199.45:8080";

export default {
    name: "ContantCardComponent",
    props: ["dataObj"],
    data() {
        return {
            axiosAuthor: {},
        };
    },
    methods: {
        async getAuthor(id) {
            try {
                let response = await axios.get(backend + `/writer/${id}`);

                console.log(response.data);
                this.axiosAuthor = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    components: {},
    created() {
        this.getAuthor(this.dataObj.writerId);
    },
    computed: {},
};
</script>
