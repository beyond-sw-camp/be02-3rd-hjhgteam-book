<!-- 컬렉션 목록의 Card -->
<template>
    <li
        class="collection_li"
        v-for="collection in collectionStore.collectionList"
        :key="collection.id"
        @click="handleCollectionClick(collection.id)"
    >
        <router-link :to="'/collectiondetail/' + collection.id">
            <a class="collection_a">
                <div class="collection_info">
                    <div class="info_text">
                        <div>
                            <!-- <img :src='`${collection.contentImage}`'> -->
                        </div>
                        <div class="info_name1">
                            <div class="info_name2">{{ collection.collectionTitle }}</div>
                        </div>
                    </div>
                </div>
            </a>
        </router-link>
    </li>
</template>

<script>
import { useCollectionStore } from "../stores/useCollectionStore";
import { mapStores } from "pinia";

export default {
    data() {
        return {
            detailList: [],
        };
    },
    computed: {
        ...mapStores(useCollectionStore),
    },
    methods: {
        handleCollectionClick(collectionId) {
            // 문자열을 정수로 변환
            const parsedId = parseInt(collectionId);
            // 유효한 숫자인지 확인
            if (!isNaN(parsedId) && Number.isInteger(parsedId)) {
                this.collectionStore.getCollectionDetail(parsedId);
            }
        },
    },
    mounted() {
        this.collectionStore.getCollectionList();
    },
    components: {},
};
</script>

<style scoped>
.collection_li {
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
    user-select: none;
    display: list-item;
    list-style: none;
    padding-left: 40px;
}

.collection_a {
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

.collection_info {
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
    font-weight: 700;
    letter-spacing: -0.7px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(41, 42, 50);
    font-size: 16px;
    line-height: 21px;
    margin-bottom: -1px;
    box-sizing: border-box;
}
</style>
