import { defineStore } from "pinia";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";


const backend = "http://www.bookspedia.kro.kr/api";

export const useCollectionStore = defineStore("collection", {
  state: () => ({ collectionList: [] , mycollectionList: [] ,count: "", id: ""}),
  actions: {

    async getCollectionList() {
      try {
        let myId = VueJwtDecode.decode(sessionStorage.getItem("aToken")).id;
        let response = await axios.get(backend + "/collection/list", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("aToken"),
          }
        });
        this.collectionList = response.data;
    
        this.id = myId;
    
        this.collectionList.forEach(collection => {
          if (this.id === collection.memberId) {
            this.mycollectionList.push(collection);
            console.log(this.mycollectionList);
          }

          this.count = this.mycollectionList.length;
          console.log(this.count);
        });
      } catch (error) {
        console.error('Error fetching collection list:', error);
        // 에러 처리 로직을 추가
      }
    },


    async getCount() {
      this.getCollectionList()
    },

    



    // async getCount() {
    //   let aToken = sessionStorage.getItem("aToken");
    //   let response = await axios.get(backend + "/collection/list", {
    //     headers: {
    //       Authorization: "Bearer " + aToken,
    //     },
    //   });
    //   this.collectionList = response.data;

    //   this.count= this.collectionList.length;
    // },
  },
});
