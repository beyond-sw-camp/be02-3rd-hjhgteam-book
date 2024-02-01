import { defineStore } from "pinia";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

const backend = "http://localhost:8080";

export const useMemberStore = defineStore("member", {
    state: () => ({ member: { email: "" } }),
    actions: {
        async login(email, password) {
            let loginMember = { email: email, password: password };
            try {
                let response = await axios.post(backend + "/member/login", loginMember);
                if (response.status === 200 && response.data.token != null) {
                    sessionStorage.setItem("atoken", response.data.token);
                    console.log(VueJwtDecode.decode(response.data.token));
                    let userClaims = VueJwtDecode.decode(response.data.token);
                    this.member.email = userClaims.username;
                }
            } catch (e) {
                console.log("로그인 실패");
                alert("로그인 실패");
            }
        },
    },
});
