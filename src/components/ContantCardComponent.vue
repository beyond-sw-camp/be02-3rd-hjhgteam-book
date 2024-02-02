<template> 
        <router-link :to="'/detail/' + '1'">
            <div class="image-wrapper">
                <div class="rank-marker">{{ dataObj.rank + 1 }}</div>
                <img :src="dataObj.img_url" alt="...">
            </div>
            <div class="card-body">
                <div class="card-text">{{ dataObj.title }}</div>
                <div>
                    <div class='color-pink'>★{{ dataObj.author }}</div>
                </div>
            </div>
        </router-link>
</template>
<script>
export default {
    name: "ContantCardComponent",
    props: ["dataObj"]
}

</script>