<template>
  <nav>
    <div class="header">
      <ul class="header-icon">
        <li class="header-logo">
          <a href="#" class="header-logo-link">
            <img class="header-logo-img" :src="logoImg" alt="" />
          </a>
        </li>
        <li class="header-icon-list">
          <a href="#" class="header-icon-list-link"> 웹툰 </a>
        </li>
        <li class="header-icon-list">
          <a href="#" class="header-icon-list-link"> 웹소설 </a>
        </li>
        <li class="header-icon-list">
          <a href="/chatlist" class="header-icon-list-link"> 채팅 </a>
        </li>
        <li class="header-icon-list-search">
          <div class="header-search">
            <div class="header-search-bar">
              <form action="#">
                <label class="header-search-label">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    autocomplete="off"
                    id="desktop-search-field"
                    placeholder="컨텐츠, 작가, 장르를 검색해보세요."
                    type="text"
                    name="searchKeyword"
                    class="header-search-text"
                    value=""
                  />
                </label>
              </form>
            </div>
          </div>
        </li>
        <li class="header-icon-list">
          <router-link to="/login">
            <button class="header-icon-login-btn">로그인</button>
          </router-link>
        </li>
        <li class="header-icon-list">
          <router-link to="/signup">
            <button class="header-icon-signup-btn">회원가입</button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      logoImg:
        "https://github.com/Hyeon-Kyun/frontend/assets/96675421/a877995e-6e1c-40e4-acd0-e49fbf08f023", //변경필요
    };
  },
};
</script>

<style scoped>
body {
  text-align: center;
  margin: 0px 0px 0px 0px;
}

.header {
  /* min-width: 760px; */
  /* margin: 0 3.5%; */
  display: block;
  height: 62px;
  top: 0px;
  left: 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  width: 100%;
}

.header-icon {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.header-logo {
  margin: 15px 15px 0 0;
  overflow: hidden;
}

.header-logo-img {
  width: 158px;
  height: 34px;
  text-align: match-parent;
}

.header-icon-list {
  margin: 0 0 0 24px;
  display: flex;
  height: 62px;
  align-items: center;
}

.header-icon-login-btn {
  background-color: transparent;
  color: #74747b;
  font-size: 14px;
  letter-spacing: -0.3px;
  padding: 0;
  border: 0;
  margin: 15px 0;
}

.header-icon-signup-btn {
  align-items: flex-start;
  border-radius: 6px;
  font-weight: 500;
  line-height: 20px;
  width: auto;
  min-width: 72px;
  height: 32px;
  color: #353535;
  font-size: 14px;
  letter-spacing: -0.3px;
  padding: 5px 14px 6px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  margin: 15px 0;
}

.header-icon-list-link {
  text-decoration: none;
  color: rgb(53, 53, 53);
  font-size: 15px;
  letter-spacing: -0.3px;
}

.header-icon-list-search {
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  transition: all 0.5s;
  width: 300px;
}

.header-search {
  position: relative;
  width: 300px;
  display: block;
  box-sizing: border-box;
  margin-right: 50px;
  list-style-position: outside;
}

.header-search-bar {
  margin: 12px 0;
}

.fa-magnifying-glass {
  color: rgba(116, 116, 123, 0.5);
  padding-right: 10px;
}

.header-search-label {
  background-color: #f5f5f7;
  display: flex;
  align-items: center;
  width: 280px;
  height: 25px;
  padding: 7px 10px 8px 20px;
  border-radius: 2px;
  position: relative;
  right: 20px;
}

.header-search-text {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 23px;
  background-color: transparent;
  width: 100%;
  padding: 0;
  padding-bottom: 1px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: #353535;
  writing-mode: horizontal-tb !important;
  padding-block: 1px;
  padding-inline: 2px;
}

.header-logo-profile {
  display: flex;
  height: 62px;
  margin: 5px 0 0 20px;
  flex-shrink: 0;
}

.header-logo-profile-link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.header-logo-profile-img {
  border: solid 1px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  position: relative;
  align-items: center;
  width: 50px;
  height: 50px;
}
</style>
