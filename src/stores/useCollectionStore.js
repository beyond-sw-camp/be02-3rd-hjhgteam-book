import { defineStore } from "pinia";
import axios from "axios";

const backend = "http://www.bookspedia.kro.kr/api";
export const useCollectionStore = defineStore("collection", {
  state: () => ({ collectionList: [] }, { detailList: [] }),
  actions: {
    async getCollectionList() {
      let aToken = sessionStorage.getItem("aToken");
      let response = await axios.get(backend + "/collection/list", {
        headers: {
          Authorization: "Bearer " + aToken,
        },
      });
      this.collectionList = response.data;
      console.log(this.collectionList);
      console.log(this.collectionList.length);
    },

    async getCollectionDetail(id) {
      let aToken = sessionStorage.getItem("aToken");
      let response = await axios.get(backend + "/collection/" + id, {
        headers: {
          Authorization: "Bearer " + aToken,
        },
      });
      this.detailList = response.data;
      console.log(this.detailList);
    },
  },
});
