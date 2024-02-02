<template>
    <div class="back">
        <div class="collection_box">
            <section class="section2">
                <div class="section2_div1">
                    <div>
                        <div class="collection"></div>
                        <ul class="collection_title">
                            <li style="font-weight: 700; font-size: 20px; padding-right: 10px;">컬렉션</li>
                        </ul>
                    </div>
                    <ul class="collection_ul">
                        <CollectionListCard></CollectionListCard>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import CollectionListCard from '../components/CollectionListCard.vue'

export default {
    components: {
        CollectionListCard,
    }
}

</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

li {
    list-style: none;
}

.collection_section {
    padding-top: 62px;
    padding-bottom: unset;
    min-width: 719px;
    box-sizing: border-box;
    display: block;
}

.back {
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    overflow: hidden;
    box-sizing: border-box;
    min-width: 719px;
    user-select: none;
    min-width: 719px;
}

.collection_box {
    background: rgb(248, 248, 248);
    width: 640px;
    padding: 0 20px 100px;
    margin: 40px auto 0;
    box-sizing: border-box;
    user-select: none;
    display: block;
}

.section2 {
    margin: 0;
    background-color: #fff;
    width: 100%;
}

.section2_div1 {
    position: relative;
}


.collection {
    padding-top: 100px;
    margin: 0px 0px -82.5px;
}

.collection_title {
    font-size: 14px;
    font-weight: 500;
    padding-left: 40px;
    padding-bottom: 20px;
    color: black;
    display: flex;
    border-bottom: rgb(248, 248, 248) solid 1px;
}

.collection_ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
    box-sizing: border-box;
    display: block;
}
</style>