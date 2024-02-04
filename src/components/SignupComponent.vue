<template>
    <div id="root">
        <div id="app" class="signup">
            <div class="signup-box">
                <header class="signup-box-header">
                    <span @click="modalClose()" id="modalClose">X</span>
                    <span
                        height="38.03px"
                        src="https://github.com/Hyeon-Kyun/frontend/assets/96675421/a877995e-6e1c-40e4-acd0-e49fbf08f023"
                        width="198px"
                        class="signup-box-header-img"
                    ></span>
                </header>
                <h2 class="signup-box-text">회원가입</h2>
                <section>
                    <div>
                        <div class="signup-box-main">
                            <form @submit.prevent="signup()" method="post" action="http://localhost:8080/member/signup">
                                <div class="signup-box-main-email">
                                    <label value="false" class="signup-box-main-email-label">
                                        <div class="signup-box-main-email-label-text">
                                            <input
                                                autocomplete="off"
                                                placeholder="이메일"
                                                type="email"
                                                name="email"
                                                v-model="member.email"
                                                id="emailText"
                                                class="signup-box-main-email-label-input"
                                            />
                                        </div>
                                        <div value="false" class="signup-box-main-email-label-clear">
                                            <span
                                                aria-label="clear"
                                                data-test="clearButton"
                                                role="button"
                                                class="signup-box-main-email-label-clear-img"
                                            ></span>
                                        </div>
                                        <span value="false" class="signup-box-main-email-label-cert"></span>
                                    </label>
                                </div>
                                <div class="signup-box-main-pw">
                                    <label value="false" class="signup-box-pw-email-label">
                                        <div class="signup-box-main-pw-label-text">
                                            <input
                                                autocomplete="off"
                                                placeholder="비밀번호"
                                                type="password"
                                                name="password"
                                                v-model="member.password"
                                                id="passwordText1"
                                                class="signup-box-main-pw-label-input"
                                            />
                                        </div>
                                        <div value="false" class="signup-box-main-pw-label-clear">
                                            <span
                                                aria-label="clear"
                                                data-test="clearButton"
                                                role="button"
                                                class="signup-box-main-pw-label-clear-img"
                                            ></span>
                                        </div>
                                        <span value="false" class="signup-box-main-pw-label-cert"></span>
                                    </label>
                                </div>
                                <div class="signup-box-main-pw">
                                    <label value="false" class="signup-box-pw-email-label">
                                        <div class="signup-box-main-pw-label-text">
                                            <input
                                                autocomplete="off"
                                                placeholder="비밀번호 확인"
                                                type="password"
                                                name="password"
                                                id="passwordText2"
                                                v-model="member.password2"
                                                class="signup-box-main-pw-label-input"
                                            />
                                        </div>
                                        <div value="false" class="signup-box-main-pw-label-clear">
                                            <span
                                                aria-label="clear"
                                                data-test="clearButton"
                                                role="button"
                                                class="signup-box-main-pw-label-clear-img"
                                            ></span>
                                        </div>
                                        <span value="false" class="signup-box-main-pw-label-cert"></span>
                                    </label>
                                </div>
                                <!-- <div class="signup-box-main-name">
                  <label value="false" class="signup-box-main-name-label">
                    <div class="signup-box-main-name-label-text">
                      <input
                        autocomplete="off"
                        placeholder="이름"
                        type="text"
                        name="name"
                        class="signup-box-main-name-label-input"
                        value=""
                      />
                    </div>
                    <div value="false" class="signup-box-main-name-label-clear">
                      <span
                        aria-label="clear"
                        data-test="clearButton"
                        role="button"
                        class="signup-box-main-name-label-clear-img"
                      ></span>
                    </div>
                    <span
                      value="false"
                      class="signup-box-main-name-label-cert"
                    ></span>
                  </label>
                </div> -->

                                <button type="button" class="signup-box-main-lang">
                                    <span
                                        height="24px"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0xOC4xOTIgMTIuNDc3Yy0uMTA0IDMuNzY5LTEuNDU4IDcuMi0zLjU2MiA5LjE4OEExMC4wMTcgMTAuMDE3IDAgMCAwIDIyIDEyLjQ3N2gtMy44MDh6bS01LjcxNSAwVjIyaC4wNDVjMi41NTctMS4yOTUgNC41OC01LjExNiA0LjcxNi05LjUyM2gtNC43NjF6bS01LjcxNiAwYy4xMzcgNC40MDcgMi4xNiA4LjIyOCA0LjcxNyA5LjUyM2guMDQ1di05LjUyM0g2Ljc2MXptLTQuNzYxIDBhMTAuMDE3IDEwLjAxNyAwIDAgMCA3LjM3IDkuMTg4Yy0yLjEwNC0xLjk4OC0zLjQ1OC01LjQyLTMuNTYyLTkuMTg4SDJ6TTE0LjYzIDIuMzM2YzIuMTAyIDEuOTg4IDMuNDU2IDUuNDIyIDMuNTYyIDkuMTg3SDIyYTEwLjAxNyAxMC4wMTcgMCAwIDAtNy4zNy05LjE4N3ptLTUuMjYgMEExMC4wMTcgMTAuMDE3IDAgMCAwIDIgMTEuNTIzaDMuODA4Yy4xMDYtMy43NjUgMS40Ni03LjE5OSAzLjU2Mi05LjE4N3pNMTIuNDc3IDJ2OS41MjNoNC43NjFDMTcuMSA3LjExNCAxNS4wNzQgMy4yOTEgMTIuNTE0IDJoLS4wMzd6bS0uOTkxIDBDOC45MjYgMy4yOSA2LjkgNy4xMTQgNi43NiAxMS41MjNoNC43NjJWMmgtLjAzN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                        width="24px"
                                        class="signup-box-main-lang-img"
                                    ></span
                                    >한국어 (대한민국)<span
                                        height="24px"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo="
                                        width="24px"
                                        class="signup-box-main-lang-kor"
                                    ></span>
                                </button>
                                <button
                                    @click="memberStore.signup(member.email, member.password1, member.password2)"
                                    id="signupBtn"
                                    class="signup-box-main-submit"
                                >
                                    회원가입
                                </button>
                            </form>
                            <div class="signup-box-main-login">
                                이미 가입하셨나요?
                                <!-- <router-link to="/login"> -->
                                <button @click="modalLogin()" class="signup-box-main-login-button">로그인</button>
                                <!-- </router-link> -->
                            </div>
                            <hr class="signup-box-main-divide" />
                            <ul class="signup-box-main-socialsignup">
                                <li class="signup-box-main-socialsignup-kakao">
                                    <button class="signup-box-main-socialsignup-kakao-button" type="button">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDM5NCAxOC4zQzE3LjAzMTggMTguMyAyMS4wNzg5IDE1LjA5ODggMjEuMDc4OSAxMS4xNUMyMS4wNzg5IDcuMjAxMTYgMTcuMDMxOCA0IDEyLjAzOTQgNEM3LjA0NzA5IDQgMyA3LjIwMTE2IDMgMTEuMTVDMyAxMy43MjQ5IDQuNzIwNzUgMTUuOTgxOSA3LjMwMjI5IDE3LjI0MDdDNy4wMzYwNyAxOC4zNTU0IDYuNTY4NTUgMjAuMzE5OCA2LjU1MTQ3IDIwLjQzODVDNi41Mjc1NCAyMC42MDQ4IDYuNzE5MjUgMjAuNzQwNiA2Ljg4NzU4IDIwLjYyNTFDNy4wMTA1IDIwLjU0MDggOS4yNTI5NSAxOS4wMTAyIDEwLjQ1NDEgMTguMTkwNEMxMC45Njg4IDE4LjI2MjQgMTEuNDk4NiAxOC4zIDEyLjAzOTQgMTguM1oiIGZpbGw9IiMzQzFFMUUiLz4KPC9zdmc+Cg=="
                                            class="signup-box-main-socialsignup-kakao-button-img"
                                        />
                                    </button>
                                </li>
                                <li class="signup-box-main-socialsignup-google">
                                    <button class="signup-box-main-socialsignup-google-button" type="button">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNjQgMTIuMjA0MkMyMC42NCAxMS41NjYgMjAuNTgyNyAxMC45NTI0IDIwLjQ3NjQgMTAuMzYzM0gxMlYxMy44NDQ2SDE2Ljg0MzZDMTYuNjM1IDE0Ljk2OTYgMTYuMDAwOSAxNS45MjI4IDE1LjA0NzcgMTYuNTYxVjE4LjgxOTJIMTcuOTU2NEMxOS42NTgyIDE3LjI1MjQgMjAuNjQgMTQuOTQ1MSAyMC42NCAxMi4yMDQyVjEyLjIwNDJaIiBmaWxsPSIjNDI4NUY0Ii8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk5OTggMjFDMTQuNDI5OCAyMSAxNi40NjcgMjAuMTk0MSAxNy45NTYxIDE4LjgxOTVMMTUuMDQ3NSAxNi41NjEzQzE0LjI0MTYgMTcuMTAxMyAxMy4yMTA3IDE3LjQyMDQgMTEuOTk5OCAxNy40MjA0QzkuNjU1NjcgMTcuNDIwNCA3LjY3MTU4IDE1LjgzNzIgNi45NjM4NSAxMy43MUgzLjk1NzAzVjE2LjA0MThDNS40Mzc5NCAxOC45ODMxIDguNDgxNTggMjEgMTEuOTk5OCAyMVYyMVoiIGZpbGw9IiMzNEE4NTMiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi45NjQwOSAxMy43MDk4QzYuNzg0MDkgMTMuMTY5OCA2LjY4MTgyIDEyLjU5MyA2LjY4MTgyIDExLjk5OThDNi42ODE4MiAxMS40MDY2IDYuNzg0MDkgMTAuODI5OCA2Ljk2NDA5IDEwLjI4OThWNy45NTgwMUgzLjk1NzI3QzMuMzQ3NzMgOS4xNzMwMSAzIDEwLjU0NzYgMyAxMS45OTk4QzMgMTMuNDUyMSAzLjM0NzczIDE0LjgyNjYgMy45NTcyNyAxNi4wNDE2TDYuOTY0MDkgMTMuNzA5OFYxMy43MDk4WiIgZmlsbD0iI0ZCQkMwNSIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wNDI3IDYuNTc5NTVDMTMuMzY0MSA2LjU3OTU1IDE0LjU1MDUgNy4wMzM2NCAxNS40ODMyIDcuOTI1NDVMMTguMDY0NSA1LjM0NDA5QzE2LjUwNTkgMy44OTE4MiAxNC40Njg2IDMgMTIuMDQyNyAzQzguNTI0NTUgMyA1LjQ4MDkxIDUuMDE2ODIgNCA3Ljk1ODE4TDcuMDA2ODIgMTAuMjlDNy43MTQ1NSA4LjE2MjczIDkuNjk4NjQgNi41Nzk1NSAxMi4wNDI3IDYuNTc5NTVWNi41Nzk1NVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+Cg=="
                                            class="signup-box-main-socialsignup-google-button-img"
                                        />
                                    </button>
                                </li>
                                <li class="signup-box-main-socialsignup-twit">
                                    <button class="signup-box-main-socialsignup-twit-button" type="button">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC40NzUzNSAxOS43QzE1LjY0NTUgMTkuNyAxOS41NjY1IDEzLjg1MjcgMTkuNTY2NSA4Ljc4MjM1QzE5LjU2NjUgOC42MTYxOSAxOS41NjMxIDguNDUwNzggMTkuNTU1MyA4LjI4NjI3QzIwLjMxNjQgNy43NDQ3MSAyMC45NzggNy4wNjg5NCAyMS41IDYuMjk5NTFDMjAuODAxNSA2LjYwNDg5IDIwLjA0OTggNi44MTA3NyAxOS4yNjEzIDYuOTAzNTRDMjAuMDY2MiA2LjQyODYzIDIwLjY4NDEgNS42NzY5MyAyMC45NzU0IDQuNzgwOTlDMjAuMjIyMSA1LjIyMDUxIDE5LjM4ODIgNS41NDAxOCAxOC41MDAzIDUuNzEyMzJDMTcuNzg5IDQuOTY2NTIgMTYuNzc1OSA0LjUgMTUuNjU0OSA0LjVDMTMuNTAyIDQuNSAxMS43NTYyIDYuMjE4NDkgMTEuNzU2MiA4LjMzNjkyQzExLjc1NjIgOC42MzgxMSAxMS43OTA1IDguOTMwODUgMTEuODU3MyA5LjIxMTg0QzguNjE3NjIgOS4wNTE1MiA1Ljc0NDgyIDcuNTI0NTQgMy44MjI0IDUuMjAyNzhDMy40ODczMiA1Ljc2OTcgMy4yOTQ1IDYuNDI4NjMgMy4yOTQ1IDcuMTMxMzRDMy4yOTQ1IDguNDYyNjggMy45ODI2OCA5LjYzNzg5IDUuMDI5MTMgMTAuMzI1NEM0LjM4OTgyIDEwLjMwNiAzLjc4OTA0IDEwLjEzMzEgMy4yNjM2NSA5Ljg0NTM0QzMuMjYyNzQgOS44NjEzNSAzLjI2Mjc0IDkuODc3NDMgMy4yNjI3NCA5Ljg5NDI3QzMuMjYyNzQgMTEuNzUyOSA0LjYwNjY0IDEzLjMwNDMgNi4zOTAxNCAxMy42NTYxQzYuMDYyOCAxMy43NDM4IDUuNzE4MjIgMTMuNzkxMSA1LjM2MjU0IDEzLjc5MTFDNS4xMTE0NCAxMy43OTExIDQuODY3MTcgMTMuNzY2NiA0LjYyOTc1IDEzLjcyMTlDNS4xMjYwMyAxNS4yNDY0IDYuNTY1MDEgMTYuMzU1OCA4LjI3MTM2IDE2LjM4NzFDNi45MzY5NiAxNy40MTYyIDUuMjU2MjkgMTguMDI5NSAzLjQyOTk0IDE4LjAyOTVDMy4xMTUzNyAxOC4wMjk1IDIuODA1MTQgMTguMDExOSAyLjUgMTcuOTc2NEM0LjIyNTI4IDE5LjA2NDcgNi4yNzM2MyAxOS43IDguNDc1MzUgMTkuNyIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                                            class="signup-box-main-socialsignup-twit-button-img"
                                        />
                                    </button>
                                </li>
                                <li class="signup-box-main-socialsignup-apple">
                                    <button class="signup-box-main-socialsignup-apple-button" type="button">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTk1NyA1LjAzMTc5QzEzLjk1NTYgNS44MDQ4MyAxMi44ODA1IDYuMzg0NjIgMTIuMDIyOSA2LjM4NDYyQzExLjkyNjMgNi4zODQ2MiAxMS44Mjk3IDYuMzcyNTQgMTEuNzY5MyA2LjM2MDQ2QzExLjc1NzIgNi4zMTIxNCAxMS43MzMgNi4xNjcyIDExLjczMyA2LjAyMjI1QzExLjczMyA1LjAzMTc5IDEyLjIyODMgNC4wNjU0OCAxMi43NzE4IDMuNDQ5NDZDMTMuNDYwMyAyLjY0MDE4IDE0LjYwNzggMi4wMzYyNCAxNS41NjIgMkMxNS41ODYyIDIuMTA4NzEgMTUuNTk4MyAyLjI0MTU4IDE1LjU5ODMgMi4zNzQ0NEMxNS41OTgzIDMuMzUyODMgMTUuMTc1NSA0LjMzMTIxIDE0LjU5NTcgNS4wMzE3OVpNMTAuMzk1MSAyMC42Mzk5QzkuOTY0NjMgMjAuODI0OCA5LjU1NjcxIDIxIDkuMDAzMjMgMjFDNy44MTk1IDIxIDYuOTk4MTQgMTkuOTEyOSA2LjA1NiAxOC41ODQyQzQuOTU2ODIgMTcuMDE0IDQuMDYyOTkgMTQuNTg2MSA0LjA2Mjk5IDEyLjI5MTJDNC4wNjI5OSA4LjU5NTA0IDYuNDY2NjggNi42MzgyNyA4LjgzNDEzIDYuNjM4MjdDOS41MjUxMiA2LjYzODI3IDEwLjE1NjUgNi44OTE2NCAxMC43MTc5IDcuMTE2OTNDMTEuMTY3MyA3LjI5NzI4IDExLjU3MTkgNy40NTk2MyAxMS45MjYzIDcuNDU5NjNDMTIuMjMzNyA3LjQ1OTYzIDEyLjYxNjkgNy4zMDgyMyAxMy4wNjM0IDcuMTMxNzdDMTMuNjg3MSA2Ljg4NTMxIDE0LjQzNDUgNi41ODk5NiAxNS4yNzIxIDYuNTg5OTZDMTUuODAzNiA2LjU4OTk2IDE3Ljc0ODMgNi42MzgyNyAxOS4wMjg3IDguNDc0MjVDMTkuMDIxMyA4LjQ3OTk2IDE5LjAwNTcgOC40OTAyOSAxOC45ODI5IDguNTA1MzVDMTguNjY3OCA4LjcxMzMyIDE2Ljk4NzMgOS44MjI2OSAxNi45ODczIDEyLjA5NzlDMTYuOTg3MyAxNC45MTIzIDE5LjQzOTMgMTUuOTE0OCAxOS41MjM5IDE1LjkzOUMxOS41MjE3IDE1Ljk0NDQgMTkuNTE2NyAxNS45NTk5IDE5LjUwODggMTUuOTg0NUMxOS40MjgyIDE2LjIzNCAxOS4wNDM5IDE3LjQyMzIgMTguMjE5NCAxOC42MzI1QzE3LjQxMDEgMTkuNzkyMSAxNi41NTI1IDIwLjk3NTggMTUuMjcyMSAyMC45NzU4QzE0LjY0MTEgMjAuOTc1OCAxNC4yMzkgMjAuNzk3OCAxMy44MjM4IDIwLjYxMzlDMTMuMzgwNyAyMC40MTc3IDEyLjkyMjggMjAuMjE0OSAxMi4xNTU4IDIwLjIxNDlDMTEuMzg0NyAyMC4yMTQ5IDEwLjg3NTggMjAuNDMzNCAxMC4zOTUxIDIwLjYzOTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                                            class="signup-box-main-socialsignup-apple-button-img"
                                        />
                                    </button>
                                </li>
                                <li class="signup-box-main-socialsignup-line">
                                    <button class="signup-box-main-socialsignup-line-button" type="button">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNjMzXzIxNjkpIj4KICAgICAgICA8cGF0aCBkPSJNMjIgMTAuNjE2MkMyMiA2LjEzNjM2IDE3LjUxMDggMi41IDEyIDIuNUM2LjQ4OTIyIDIuNSAyIDYuMTM2MzYgMiAxMC42MTYyQzIgMTQuNjI3NSA1LjU2MTM5IDE3Ljk4MjcgMTAuMzU5OSAxOC42MkMxMC42ODc5IDE4LjY5NDkgMTEuMTI4NCAxOC44MzU1IDExLjI0MDkgMTkuMTE2N0MxMS4zNDQgMTkuMzY5NyAxMS4zMDY1IDE5Ljc2MzQgMTEuMjY5IDIwLjAxNjRDMTEuMjY5IDIwLjAxNjQgMTEuMTQ3MSAyMC43MTkzIDExLjEyODQgMjAuODY5M0MxMS4wODE1IDIxLjEyMjMgMTAuOTMxNiAyMS44NTMzIDExLjk5MDYgMjEuNDEyOEMxMy4wNTkgMjAuOTYzIDE3Ljc0NTEgMTguMDIwMiAxOS44NDQ0IDE1LjYxMTVDMjEuMzA2NSAxNC4wMTgzIDIyIDEyLjQwNjMgMjIgMTAuNjE2MlpNOC40NjY3MyAxMy4wMDYxQzguNDY2NzMgMTMuMTA5MiA4LjM4MjM4IDEzLjE5MzUgOC4yNzkyOSAxMy4xOTM1SDUuNDc3MDRDNS4zNzM5NSAxMy4xOTM1IDUuMjg5NiAxMy4xMDkyIDUuMjg5NiAxMy4wMDYxVjguNjM4NzFDNS4yODk2IDguNTM1NjEgNS4zNzM5NSA4LjQ1MTI3IDUuNDc3MDQgOC40NTEyN0g2LjE4OTMyQzYuMjkyNDEgOC40NTEyNyA2LjM3Njc2IDguNTM1NjEgNi4zNzY3NiA4LjYzODcxVjEyLjEwNjRIOC4yNzkyOUM4LjM4MjM4IDEyLjEwNjQgOC40NjY3MyAxMi4xOTA3IDguNDY2NzMgMTIuMjkzOFYxMy4wMDYxWk0xMC4xNjMxIDEzLjAwNjFDMTAuMTYzMSAxMy4xMDkyIDEwLjA3ODcgMTMuMTkzNSA5Ljk3NTYzIDEzLjE5MzVIOS4yNjMzNkM5LjE2MDI2IDEzLjE5MzUgOS4wNzU5MSAxMy4xMDkyIDkuMDc1OTEgMTMuMDA2MVY4LjYzODcxQzkuMDc1OTEgOC41MzU2MSA5LjE2MDI2IDguNDUxMjcgOS4yNjMzNiA4LjQ1MTI3SDkuOTc1NjNDMTAuMDc4NyA4LjQ1MTI3IDEwLjE2MzEgOC41MzU2MSAxMC4xNjMxIDguNjM4NzFWMTMuMDA2MVpNMTQuOTg5NyAxMy4wMDYxQzE0Ljk4OTcgMTMuMTA5MiAxNC45MDUzIDEzLjE5MzUgMTQuODAyMiAxMy4xOTM1SDE0LjA5QzE0LjA3MTIgMTMuMTkzNSAxNC4wNTI1IDEzLjE5MzUgMTQuMDQzMSAxMy4xODQySDE0LjAzMzdDMTQuMDMzNyAxMy4xODQyIDE0LjAzMzcgMTMuMTg0MiAxNC4wMjQ0IDEzLjE4NDJIMTQuMDE1SDE0LjAwNTZDMTQuMDA1NiAxMy4xODQyIDE0LjAwNTYgMTMuMTg0MiAxMy45OTYzIDEzLjE4NDJMMTMuOTg2OSAxMy4xNzQ4QzEzLjk2ODEgMTMuMTY1NCAxMy45NDk0IDEzLjE0NjcgMTMuOTQgMTMuMTI3OUwxMS45MzQ0IDEwLjQxOTRWMTMuMDA2MUMxMS45MzQ0IDEzLjEwOTIgMTEuODUgMTMuMTkzNSAxMS43NDcgMTMuMTkzNUgxMS4wMzQ3QzEwLjkzMTYgMTMuMTkzNSAxMC44NDcyIDEzLjEwOTIgMTAuODQ3MiAxMy4wMDYxVjguNjM4NzFDMTAuODQ3MiA4LjUzNTYxIDEwLjkzMTYgOC40NTEyNyAxMS4wMzQ3IDguNDUxMjdIMTEuNzM3NkMxMS43Mzc2IDguNDUxMjcgMTEuNzM3NiA4LjQ1MTI3IDExLjc0NyA4LjQ1MTI3SDExLjc1NjNIMTEuNzY1N0gxMS43NzUxSDExLjc4NDRDMTEuNzg0NCA4LjQ1MTI3IDExLjc4NDQgOC40NTEyNyAxMS43OTM4IDguNDUxMjdIMTEuODAzMkMxMS44MDMyIDguNDUxMjcgMTEuODAzMiA4LjQ1MTI3IDExLjgxMjYgOC40NTEyN0MxMS44MTI2IDguNDUxMjcgMTEuODIxOSA4LjQ1MTI3IDExLjgyMTkgOC40NjA2NEMxMS44MjE5IDguNDYwNjQgMTEuODIxOSA4LjQ2MDY0IDExLjgzMTMgOC40NjA2NEMxMS44MzEzIDguNDYwNjQgMTEuODQwNyA4LjQ2MDY0IDExLjg0MDcgOC40NzAwMUMxMS44NDA3IDguNDcwMDEgMTEuODQwNyA4LjQ3MDAxIDExLjg1IDguNDcwMDFDMTEuODUgOC40NzAwMSAxMS44NTk0IDguNDcwMDEgMTEuODU5NCA4LjQ3OTM4QzExLjg1OTQgOC40NzkzOCAxMS44NTk0IDguNDc5MzggMTEuODY4OCA4LjQ3OTM4TDExLjg3ODIgOC40ODg3NUwxMS44ODc1IDguNDk4MTNDMTEuODk2OSA4LjUwNzUgMTEuODk2OSA4LjUwNzUgMTEuOTA2MyA4LjUxNjg3TDEzLjkwMjUgMTEuMjM0OFY4LjYzODcxQzEzLjkwMjUgOC41MzU2MSAxMy45ODY5IDguNDUxMjcgMTQuMDkgOC40NTEyN0gxNC44MDIyQzE0LjkwNTMgOC40NTEyNyAxNC45ODk3IDguNTM1NjEgMTQuOTg5NyA4LjYzODcxVjEzLjAwNjFaTTE4Ljg2MDQgOS4zNTA5OEMxOC44NjA0IDkuNDU0MDggMTguNzc2IDkuNTM4NDMgMTguNjcyOSA5LjUzODQzSDE2Ljc2MVYxMC4yNzg4SDE4LjY3MjlDMTguNzc2IDEwLjI3ODggMTguODYwNCAxMC4zNjMyIDE4Ljg2MDQgMTAuNDY2M1YxMS4xNzg1QzE4Ljg2MDQgMTEuMjgxNiAxOC43NzYgMTEuMzY2IDE4LjY3MjkgMTEuMzY2SDE2Ljc2MVYxMi4xMDY0SDE4LjY3MjlDMTguNzc2IDEyLjEwNjQgMTguODYwNCAxMi4xOTA3IDE4Ljg2MDQgMTIuMjkzOFYxMy4wMDYxQzE4Ljg2MDQgMTMuMTA5MiAxOC43NzYgMTMuMTkzNSAxOC42NzI5IDEzLjE5MzVIMTUuODcwN0MxNS43Njc2IDEzLjE5MzUgMTUuNjgzMiAxMy4xMDkyIDE1LjY4MzIgMTMuMDA2MVY4LjY0ODA4QzE1LjY4MzIgOC41NDQ5OSAxNS43Njc2IDguNDYwNjQgMTUuODcwNyA4LjQ2MDY0SDE4LjY3MjlDMTguNzc2IDguNDYwNjQgMTguODYwNCA4LjU0NDk5IDE4Ljg2MDQgOC42NDgwOFY5LjM1MDk4WiIgZmlsbD0id2hpdGUiLz4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMjYzM18yMTY5Ij4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE5LjA1MzQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIuNSkiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K"
                                            class="signup-box-main-socialsignup-line-button-img"
                                        />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapStores } from "pinia";
import { useMemberStore } from "@/stores/useMemberStore";

export default {
    name: "SignupComponent",
    data() {
        return {
            member: { email: "", password: "" },
        };
    },
    computed: {
        ...mapStores(useMemberStore),
    },
    methods: {
        async signup() {
            if (
                this.member.password1 == this.member.password2 &&
                this.member.password1 != null &&
                this.member.password2 != null
            ) {
                try {
                    let response = await axios.post("http://localhost:8080/member/signup", this.member);
                    if (response.status === 200) {
                        window.location.href = "/login";
                    } else {
                        alert("회원가입 실패");
                    }
                } catch (e) {
                    alert("잘못된 회원가입 방식");
                }
            } else {
                alert("잘못된 비밀번호 입력입니다");
            }
        },
        modalLogin() {
            let modalLogin = document.getElementById("modalLogin");
            let modalSignup = document.getElementById("modalSignup");
            if (modalSignup.style.display == "block") {
                modalSignup.style.display = "none";
            }
            modalLogin.style.display = "block";
        },
        modalClose() {
            let modalSignup = document.getElementById("modalSignup");
            if (modalSignup.style.display == "block") {
                modalSignup.style.display = "none";
            }
        },
    },
};
</script>

<style scoped>
#modalClose {
    position: fixed;
    left: 15px;
    text-decoration: solid;
}

#root {
    display: block;
    position: fixed;
    inset: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;
    width: 100%;
}
.signup {
    display: inline-block;
    position: fixed;
    vertical-align: middle;
    text-align: left;
    width: 375px;
    height: auto;
    max-height: 100%;
    border-radius: 6px;
    overflow: scroll;

    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.signup-box {
    padding: 32px 0px 16px;
}

.signup-box-header {
    text-align: center;
    margin: 0px 0px 14px;
    overflow: hidden;
}

.signup-box-header-img {
    display: inline-block;
    background: url(https://github.com/Hyeon-Kyun/frontend/assets/96675421/a877995e-6e1c-40e4-acd0-e49fbf08f023) center
        center / contain no-repeat;
    width: 198px;
    height: 38.03px;
}

.signup-box-text {
    font-size: 17px;
    letter-spacing: -0.5px;
    line-height: 22px;
    font-weight: 700;
    text-align: center;
    margin: 24px 0px 20px;
}

.signup-box-main {
    margin: 0px 20px;
}

.signup-box-main-name {
    padding: 4px 0px;
    overflow: hidden;
}

.signup-box-main-name-label {
    display: flex;
    align-items: center;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0px 12px;
    border-radius: 6px;
}

.signup-box-main-name-label-text {
    display: flex;
    flex: 1 1 0%;
}

.signup-box-main-name-label-input {
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.6px;
    line-height: 21px;
    width: 100%;
    padding: 0px;
    border: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(255, 47, 110);
}

.signup-box-main-name-label-clear {
    display: none;
    width: 24px;
    height: 100%;
}

.signup-box-main-name-label-clear-img {
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjIwOCAxMS40TDkuMzggOC41N2wtLjgwOS44MDkgMi44MjkgMi44MjgtMi44MjkgMi44MjguODA5LjgwOSAyLjgyOC0yLjgyOSAyLjgyOCAyLjgyOS44MDktLjgwOS0yLjgyOS0yLjgyOCAyLjgyOS0yLjgyOC0uODA5LS44MDktMi44MjggMi44Mjl6TTEyIDIwYTggOCAwIDEgMSAwLTE2IDggOCAwIDAgMSAwIDE2eiIvPgo8L3N2Zz4K)
        center center / cover no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.signup-box-main-name-label-cert {
    display: inline-block;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 24px;
}

.signup-box-main-email {
    padding: 4px 0px;
    overflow: hidden;
}

.signup-box-main-email-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0px 12px;
    border-radius: 6px;
}

.signup-box-main-email-label-text {
    display: flex;
    flex: 1 1 0%;
}

.signup-box-main-email-label-input {
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.6px;
    line-height: 21px;
    width: 100%;
    padding: 0px;
    border: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(255, 47, 110);
}

.signup-box-main-email-label-clear {
    display: none;
    width: 24px;
    height: 100%;
}

.signup-box-main-email-label-clear-img {
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjIwOCAxMS40TDkuMzggOC41N2wtLjgwOS44MDkgMi44MjkgMi44MjgtMi44MjkgMi44MjguODA5LjgwOSAyLjgyOC0yLjgyOSAyLjgyOCAyLjgyOS44MDktLjgwOS0yLjgyOS0yLjgyOCAyLjgyOS0yLjgyOC0uODA5LS44MDktMi44MjggMi44Mjl6TTEyIDIwYTggOCAwIDEgMSAwLTE2IDggOCAwIDAgMSAwIDE2eiIvPgo8L3N2Zz4K)
        center center / cover no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.signup-box-main-email-label-cert {
    display: inline-block;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 24px;
}

.signup-box-main-pw {
    padding: 4px 0px;
    overflow: hidden;
}

.signup-box-pw-email-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0px 12px;
    border-radius: 6px;
}

.signup-box-main-pw-label-text {
    display: flex;
    flex: 1 1 0%;
}

.signup-box-main-pw-label-input {
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.6px;
    line-height: 21px;
    width: 100%;
    padding: 0px;
    border: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    caret-color: rgb(255, 47, 110);
}

.signup-box-main-pw-label-clear {
    display: none;
    width: 24px;
    height: 100%;
}

.signup-box-main-pw-label-clear-img {
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjIwOCAxMS40TDkuMzggOC41N2wtLjgwOS44MDkgMi44MjkgMi44MjgtMi44MjkgMi44MjguODA5LjgwOSAyLjgyOC0yLjgyOSAyLjgyOCAyLjgyOS44MDktLjgwOS0yLjgyOS0yLjgyOCAyLjgyOS0yLjgyOC0uODA5LS44MDktMi44MjggMi44Mjl6TTEyIDIwYTggOCAwIDEgMSAwLTE2IDggOCAwIDAgMSAwIDE2eiIvPgo8L3N2Zz4K)
        center center / cover no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.signup-box-main-pw-label-cert {
    display: inline-block;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 24px;
}

.signup-box-main-lang {
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(74, 74, 74);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    text-decoration: underline;
    cursor: pointer;
}

.signup-box-main-lang-img {
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0xOC4xOTIgMTIuNDc3Yy0uMTA0IDMuNzY5LTEuNDU4IDcuMi0zLjU2MiA5LjE4OEExMC4wMTcgMTAuMDE3IDAgMCAwIDIyIDEyLjQ3N2gtMy44MDh6bS01LjcxNSAwVjIyaC4wNDVjMi41NTctMS4yOTUgNC41OC01LjExNiA0LjcxNi05LjUyM2gtNC43NjF6bS01LjcxNiAwYy4xMzcgNC40MDcgMi4xNiA4LjIyOCA0LjcxNyA5LjUyM2guMDQ1di05LjUyM0g2Ljc2MXptLTQuNzYxIDBhMTAuMDE3IDEwLjAxNyAwIDAgMCA3LjM3IDkuMTg4Yy0yLjEwNC0xLjk4OC0zLjQ1OC01LjQyLTMuNTYyLTkuMTg4SDJ6TTE0LjYzIDIuMzM2YzIuMTAyIDEuOTg4IDMuNDU2IDUuNDIyIDMuNTYyIDkuMTg3SDIyYTEwLjAxNyAxMC4wMTcgMCAwIDAtNy4zNy05LjE4N3ptLTUuMjYgMEExMC4wMTcgMTAuMDE3IDAgMCAwIDIgMTEuNTIzaDMuODA4Yy4xMDYtMy43NjUgMS40Ni03LjE5OSAzLjU2Mi05LjE4N3pNMTIuNDc3IDJ2OS41MjNoNC43NjFDMTcuMSA3LjExNCAxNS4wNzQgMy4yOTEgMTIuNTE0IDJoLS4wMzd6bS0uOTkxIDBDOC45MjYgMy4yOSA2LjkgNy4xMTQgNi43NiAxMS41MjNoNC43NjJWMmgtLjAzN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==)
        center center / contain no-repeat;
    width: 24px;
    height: 24px;
    margin: 0px 12px 0px 0px;
}

.signup-box-main-lang-kor {
    display: inline-block;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNBMEEwQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjY2MyAxNS44N2wtNS40OTQtNWEuNS41IDAgMCAxIC4zMzctLjg3aDEwLjk4OGEuNS41IDAgMCAxIC4zMzcuODdsLTUuNDk0IDVhLjUuNSAwIDAgMS0uNjc0IDB6Ii8+Cjwvc3ZnPgo=)
        center center / contain no-repeat;
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 6px;
}

.signup-box-main-submit {
    padding: 0px;
    border: none;
    cursor: pointer;
    background: rgb(255, 47, 110);
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    width: 100%;
    height: 44px;
    border-radius: 6px;
    margin: 16px 0px 0px;
}

.signup-box-main-login {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 20px;
    color: rgb(140, 140, 140);
    text-align: center;
    margin: 20px 0px 0px;
}

.signup-box-main-login-button {
    background: none;
    padding: 0px;
    border: none;
    margin: 0px;
    cursor: pointer;
    color: rgb(255, 47, 110);
}

.signup-box-main-divide {
    position: relative;
    color: black;
    text-align: center;
    height: 1.5em;
    border: 0px;
    outline: 0px;
    margin: 24px 0px;
}

.signup-box-main-divide::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    border-top: 1px solid rgb(216, 216, 216);
}

.signup-box-main-divide::after {
    content: "OR";
    display: inline-block;
    position: relative;
    top: -2px;
    background-color: rgb(255, 255, 255);
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    vertical-align: middle;
    padding: 0px 14px;
}

.signup-box-main-socialsignup {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 14px;
    list-style: none;
    padding-inline-start: 0px;
}

.signup-box-main-socialsignup-kakao {
    display: block;
}

.signup-box-main-socialsignup-kakao::after {
    content: none;
}

.signup-box-main-socialsignup-kakao-button {
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(247, 227, 23);
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.signup-box-main-socialsignup-kakao-button-img {
    width: auto;
    height: 60%;
}

.signup-box-main-socialsignup-google {
    display: block;
}

.signup-box-main-socialsignup-google::after {
    content: none;
}

.signup-box-main-socialsignup-google-button {
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: 1px solid rgb(227, 228, 230);
    border-radius: 50%;
    cursor: pointer;
}

.signup-box-main-socialsignup-google-button-img {
    width: auto;
    height: 60%;
}

.signup-box-main-socialsignup-twit {
    display: block;
}

.signup-box-main-socialsignup-twit::after {
    content: none;
}

.signup-box-main-socialsignup-twit-button {
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(29, 161, 243);
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.signup-box-main-socialsignup-twit-button-img {
    width: auto;
    height: 60%;
}

.signup-box-main-socialsignup-apple {
    display: block;
}

.signup-box-main-socialsignup-apple::after {
    content: none;
}

.signup-box-main-socialsignup-apple-button {
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(0, 0, 0);
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.signup-box-main-socialsignup-apple-button-img {
    width: auto;
    height: 60%;
}

.signup-box-main-socialsignup-line {
    display: block;
}

.signup-box-main-socialsignup-line::after {
    content: none;
}

.signup-box-main-socialsignup-line-button {
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(0, 195, 0);
    font-weight: 700;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.signup-box-main-socialsignup-line-button-img {
    width: auto;
    height: 60%;
}
</style>
