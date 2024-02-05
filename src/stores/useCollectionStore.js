import { defineStore } from "pinia";
import axios from "axios";

const backend = "www.bookipedia.kro.kr/api";

export const useCollectionStore = defineStore("collection", {
    state: () => ({ collectionList: [] }),
    actions: {
        async getCollectionList() {
            let response = await axios.get(backend + "/collection/list", {
                headers: {
                    Authorization:
                        "Bearer " +
                        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1c3duMjgwMUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzA2NzU0ODczLCJleHAiOjEwMjQwNTI5MjkzODIwMDB9.s6EL-TDcMb0_5Kf-20QmarVEfjapETFICuW7Y8rTxL8",
                },
            });
            this.collectionList = response.data;
        },
    },
});
