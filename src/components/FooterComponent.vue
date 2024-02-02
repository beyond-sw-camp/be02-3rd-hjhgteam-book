<template>
    <footer class="footer">
        <div class="footer-box">
            <div class="footer-left">
                <ul class="footer-left-list1">
                    <li class="footer-left-list1-text1">서비스 이용약관</li>
                    <li class="footer-left-list1-text2">개인정보 처리방침</li>
                    <a href="http://team.watcha.com/" class="footer-left-list-link"> 회사 안내 </a>
                </ul>
                <ul class="footer-left-list2">
                    <li class="footer-left-list1-text1">고객센터</li>
                    <li class="footer-left-list1-text1">
                        <a href="mailto:cs@watchapedia.co.kr" class="footer-left-list-link">
                            cs@watchapedia.co.kr
                            <span>, 02-515-9985</span>
                        </a>
                    </li>
                </ul>
                <ul class="footer-left-list1">
                    <li class="footer-left-list1-text1">제휴 및 대외 협력</li>
                    <li class="footer-left-list3-text1">
                        <a href="https://watcha.team/contact" target="_blank" class="footer-left-list-link">
                            https://watcha.team/contact
                        </a>
                    </li>
                </ul>
                <ul class="footer-left-list3">
                    <li class="footer-left-list1-text1">주식회사 왓챠</li>
                    <li class="footer-left-list1-text1">대표 박태훈</li>
                    <li class="footer-left-list1-text1">서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
                </ul>
                <ul class="footer-left-list1">
                    <li class="footer-left-list1-text1">사업자 등록 번호<span> 211-88-66013</span></li>
                </ul>
                <ul class="footer-left-list4" id="footer-logo-img">
                    <img :src="logoImg" class="footer-left-list-img" />
                    <li class="footer-left-list4-text">© 2022 by WATCHA, Inc. All rights reserved.</li>
                </ul>
            </div>
            <div class="footer-left"></div>
            <div class="footer-right"></div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
    data() {
        return {
            logoImg: "https://github.com/Hyeon-Kyun/frontend/assets/96675421/a877995e-6e1c-40e4-acd0-e49fbf08f023", //변경필요
        };
    },
};
</script>

<style scoped>
.footer {
    background-color: rgb(28, 29, 31);
    padding: 20px 0px 38px;
    width: 100%;
    position: absolute;
    bottom: 0;
}

.footer-box {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    min-width: 1100px;
    margin: 0px 60px;
}

.footer-left {
    flex: 1 1 0%;
}

div > ul > li::after {
    content: "|";
    float: right;
    display: block;
    padding-left: 3px;
    padding-right: 3px;
}

nav > div > ul > li::after {
    content: "";
}

div > ul > li:last-child:after {
    content: "";
}

.footer-left-list1 {
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
}

.footer-left-list1-text1 {
    display: inline-block;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
    vertical-align: top;
}

.footer-left-list1-text2 {
    display: inline-block;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.3px;
    line-height: 22px;
    vertical-align: top;
}

.footer-left-list-link {
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
    text-decoration: none;
}

.body {
    margin-top: 30px;
    margin-bottom: 30px;
}

.footer-left-list2 {
    list-style: none;
    padding: 0px;
    margin: 12px 0px 0px;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
}

.footer-left-list-link {
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
    text-decoration: none;
}

.footer-left-list3 {
    list-style: none;
    padding: 0px;
    margin: 13px 0px 0px;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
}

.footer-left-list4 {
    list-style: none;
    padding: 0px;
    margin-top: 5px;
    color: rgb(165, 165, 167);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 22px;
}

.footer-left-list4-text {
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    vertical-align: top;
    line-height: 15px;
}

.footer-left-list-img {
    width: 80px;
    display: inline-block;
    padding-right: 10px;
}
</style>
