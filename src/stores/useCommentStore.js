import { defineStore } from "pinia";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";



export const useCollectionStore = defineStore("comment", {
  state: () => ({ commentList: [] , myCommentList: [] ,myCommentCount: 0, id: ""}),
  async getcommentCounet(page, size) {

    let myId = VueJwtDecode.decode(sessionStorage.getItem("aToken")).id;
    let backend = "http://localhost:8080"

    let response = await axios.get(backend + "/comment/list?page=" + page + "&size=" + size);
    this.commentList = response.data;

    console.log(this.commentList);

    this.member.id = myId;

    this.commentList.forEach(comment => {
        if (this.member.id === comment.member.id) {
            this.myCommentList.push(comment);
            console.log(comment)
        }
        this.myCommentCount = this.myCommentList.length;
    });
    console.log(this.myCommentCount);
},
});
