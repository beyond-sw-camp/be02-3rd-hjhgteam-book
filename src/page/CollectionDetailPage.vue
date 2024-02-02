<template>
      <div class="div1">
        <section>
          <div class="div2">
            <div class="div3">
              <div class="div4">
                <header class="header_img">
                  <div class="header_div">
                    <div class="img_div">
                      <span class="img_span"></span>
                    </div>
                  </div>
                </header>
                <section class="title_section">
                  <div>
                    <div class="title_div1">
                      <h1 class="title_h1">{{ collectionStore.collectionList.contentName }}</h1>
                    </div>
                  </div>
                </section>
                <section class="content_list">
                  <div>
                    <div class="content_div">
                      <ul class="content_ul">
                        <DetailContentCard></DetailContentCard>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
</template>

<script>

import DetailContentCard  from '../components/DetailContentCard.vue'
import { useCollectionStore } from '@/stores/useCollectionStore'
import { mapStores } from 'pinia'

export default{
  computed: {
    ...mapStores(useCollectionStore)
  },

  components: {
    DetailContentCard
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
}

section,
div {
  display: block;
}

a {
  text-decoration: none;
  color: black;
}

.body_section1 {
  padding-top: 62px;
  padding-bottom: unset;
}

.div1 {
  background: rgb(248, 248, 248);
}

.div2 {
  padding: 28px 0px 57px;
}

.div3 {
  max-width: 640px;
  margin: 0px auto;
}

.div4 {
  border: 1px solid;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  border-color: rgb(227, 227, 227) !important;
}

.header_img {
  height: 263px;
  padding-top: 0px;
  position: relative;
}

.header_div {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: absolute;
  inset: 0px;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
}

.img_div {
  transform: translate3d(0%, 0px, 0px);
  width: 167px;
  overflow: hidden;
  background: rgb(248, 248, 248);
  display: block;
  position: absolute;
  top: 0px;
  z-index: 8;
  height: 100%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 8px 4px;
}

.img_span {
  background-image: url();
  display: inline-block;
  position: absolute;
  inset: 0px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 1;
  transition: all 300ms ease 0s;
}

.header_div::after {
  content: "";
  display: inline-block;
  position: absolute;
  inset: 0px;
  z-index: 8;
  background-image: linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.6) 48%, rgba(20, 20, 20, 0.95) 95%);
  white-space: nowrap;
}

.title_section {
  position: relative;
  z-index: 20;
}



.title_div1 {
  margin-top: 50px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
}

.title_h1 {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
  margin: 16px 0 6px;
  margin-block: 0px;
  margin-inline: 0px;
}

.content_list {
  padding: 8px 0 0;
}

.content_div {
  margin: 0 20px;
}

.content_ul {
  list-style: none;
  padding: 0;
  margin: 14px -5px 0;
  overflow: hidden;
  margin-block: 0px;
  margin-inline: 0px;
  padding-inline-start: 0px;
}

</style>