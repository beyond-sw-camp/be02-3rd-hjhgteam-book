import { defineStore } from "pinia";
import axios from "axios";
// import VueJwtDecode from "vue-jwt-decode";

const backend = "www.bookspedia.kro.kr/api";

export const useMemberStore = defineStore("member", {
    state: () => ({ member: { email: "", nickname: "" } }),
    actions: {
        async login(email, password) {
            let loginMember = { email: email, password: password };
            try {
                let response = await axios.post(backend + "/member/login", loginMember);
                if (response.status === 200 && response.data.token != null) {
                    // sessionStorage.setItem("aToken", response.data.token);
                    // let userClaims = VueJwtDecode.decode(response.data.token);
                    // this.member.email = userClaims.username;
                    // this.member.nickname = userClaims.nickname;
                }
            } catch (e) {
                console.log("로그인 실패");
                alert("로그인 실패");
            }
        },
        async signup(email, password1, password2) {
            if (password1 == password2) {
                let signupMember = { email: email, password: password1 };

                try {
                    let response = await axios.post(backend + "/member/signup", signupMember);

                    if (response.status === 200) {
                        return true;
                    } else {
                        console.log("회원가입 실패");
                        alert("회원가입 실패");
                        return false;
                    }
                } catch (e) {
                    console.log("회원가입 실패");
                    alert("회원가입 실패");
                    return false;
                }
            } else {
                console.log("비밀번호가 다릅니다");
                alert("비밀번호가 다릅니다");
                return false;
            }
        },
    },
});
