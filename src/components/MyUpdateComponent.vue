<template>
    <!-- 마이페이지 → 정보수정 모달 컴포넌트 -->
    <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <title>내 정보 수정하기</title>
    </head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <body>
        <div class="modal_div" id="modal">
            <div class="modal_back">
                <div class="modal_menu">
                    <header class="modal_header">
                        <div class="modal_exit">
                            <div>
                                <RouterLink to='/mypage'>
                                    <button class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
                                </RouterLink>
                            </div>
                            <div></div>
                        </div>
                        <div class="setting">
                            <div class="setting_title">설정</div>
                        </div>
                        <div class="modal_top">설정</div>
                    </header>
                    <div class="setting_list">
                        <div class="setting_list2">
                            <div class="setting_list3">
                                <section class="my_setting">
                                    <div class="name_setting">프로필 사진</div>
                                    <div>
                                        <form id="myform" method="patch" enctype="multipart/form-data">
                                            <input type="file" name="imageFile" onchange="readURL(this)"
                                                style="color: white" id="imageFile" />
                                        </form>
                                        <img id="preview" class="imgpreview" />
                                    </div>
                                    <ul></ul>
                                    <div class="name_setting">이메일</div>
                                    <div>
                                        <form>
                                            <input class="input_name" type="text" name="email" id="email"
                                                value="guswn2801@gmail.com" readonly />
                                        </form>
                                    </div>
                                    <div class="name_setting">닉네임</div>
                                    <div>
                                        <form>
                                            <input class="input_name" type="text" name="nickname" id="nickname" />
                                        </form>
                                    </div>
                                    <ul></ul>

                                    <div>
                                        <button id="updateBtn" class="saveBtn">저장</button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>

    </html>
</template>

<script>

</script>

<style scoped>
/* 모달 CSS */
a {
    text-decoration: none;
    color: black;
}


li {
    list-style: none;
}


.modal_top {
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    white-space: nowrap;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    margin: 11px 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0;
    transition: all 300ms ease 0s;
}

.modal_div {
    display: block;
    position: fixed;
    inset: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;
    box-sizing: border-box;
    user-select: none;
}

.modal_back {
    text-align: center;
    padding: 20px 0px;
    overflow: auto;
    display: flex;
    position: absolute;
    inset: 0px;
    z-index: 101;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

.modal_menu {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
    width: 375px;
    height: auto;
    max-height: 100%;
    /* border-radius: 0px; */
    /* overflow: scroll; */
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px 0px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    user-select: none;
}

.modal_header {
    left: 0px;
    z-index: 50;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    width: 100%;
    padding: 0px 16px;
    border-bottom: 1px solid rgb(227, 227, 227);
    position: absolute;
    top: 0px;
    text-align: left;
    height: auto;
    display: block;
}

.modal_exit {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    text-align: left;
}


.exit_btn {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);
    padding: 0px;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin: 10px 0px;
    appearance: initial;
    font-size: 100%;
    line-height: normal;
    overflow: visible;
    box-sizing: border-box;
}

.setting {
    display: flex;
    transform: translate3d(0px, 0px, 0px);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 30px;
    margin: 0px 4px 10px;
    opacity: 1;
    transition: all 150ms ease 0s;
    box-sizing: border-box;
    user-select: none;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 22px;
    text-align: left;
}

.setting_title {
    display: inline-block;
    font-weight: 700;
    letter-spacing: -1.2px;
    font-size: 22px;
    line-height: 29px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}

.setting_list {
    height: auto;
    overflow: auto;
    padding: 60px 0px 0px;
    display: block;
}

.setting_list2 {
    text-align: left;
    margin-bottom: 10px;
}

.setting_list3 {
    margin: 0px 20px;
    display: block;
}

.my_setting {
    margin: 32px 0px;
    display: block;
    text-align: left;
}

.name_setting {
    color: gray;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    padding: 5px 0px;
    box-sizing: border-box;

}

.input_name {
    padding-top: 7px;
    padding-bottom: 10px;
    border-bottom: solid rgb(227, 227, 227) 1px;
    width: 100%;

}

input {
    border: none;
}

#modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.closeBtn{
    background-color: white;
    border: none;
    size: 20px;
    margin-top: 20px;
}

.closeBtn:hover{
    color: gray;
    cursor: pointer;
}


/* 저장 버튼 */
.saveBtn {
    width: 100%;
    height: 40px;
    border: none;
    margin-top: 10px;
}

.saveBtn:hover {
    background-color: lightgrey
}

.imgpreview {
    width: 100%;
    height: 280px;
    object-fit: cover;
}
</style>