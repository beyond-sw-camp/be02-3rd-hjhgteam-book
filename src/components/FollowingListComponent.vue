<template>
    <li class="follow_li" v-for="(following, index) in followingList" :key="index">
        <a title="닉네임1" class="follow_a" href="#">
            <div class="photo">
                <div class="photo2">
                    <div class="photo3">

                    </div>
                </div>
            </div>
            <div class="follow_info">
                <div class="info_text">
                    <div class="info_name1">
                        <div class="info_name2">{{ following }}</div>
                    </div>
                    <div class="follow_name3">
                        <div class="follow_name4">팔로잉소개</div>
                    </div>
                </div>
                <div>
                    <button class="ing_btn">팔로잉</button>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return { followingList: [] }
    },

    methods: {
        async getFollowingList() {

            try {
                let response = await axios.get("http://localhost:8080/follow/list/followings",
                    {
                        headers: {
                            Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imd1c3duMjgwMUBnbWFpbC5jb20iLCJpZCI6MTUsImlhdCI6MTcwNjg0OTc4MiwiZXhwIjoxMDI0MTA5ODcxMjczMDAwfQ.0QldCc7GoXU57C9kQivO-9Ni3sBeveIgNs3DgtIuYf0"

                        }
                    });
                this.followingList = response.data;

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        components: {

        }
    },

    mounted() {
        this.getFollowingList();
    }
}

</script>

<style scoped>
.follow_li {
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
    user-select: none;
    display: list-item;
    list-style: none;
    padding-left: 40px;
}

.follow_a {
    height: 104px;
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    outline: rgb(0, 0, 0);
    box-sizing: border-box;
    user-select: none;
    /* border-bottom: solid 1px rgb(248, 248, 248); */
}

.photo {
    position: relative;
    box-sizing: border-box;
    user-select: none;
    display: block;
    color: inherit;
}

.photo2 {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    border: none;
    margin: 0px 11px 0px 0px;
}

.photo3 {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
    position: relative;
    z-index: 1;
    background: url(https://an2-img.amz.wtchn.net/image/v2/jyHe6EFD1ye-qgjsRbBLgw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UQXdlREV3TUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNWelpYSXZNelpzZGxoTk0zQXpOVmhrYmk5d2NtOW1hV3hsTHpFMk16QXdOemd6TnpFeU9URXhORFU1T0RRaWZRLmM5cnZfUmJEVXRGb1R3NDlmQkYyWTlwUVhRb0RaRW1yR1FOalZWYVFialE) center center / cover no-repeat;
    width: 100%;
    height: 100%;
}

.follow_info {
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info_text {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 10px 0px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.info_name1 {
    color: rgb(30, 30, 30);
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    box-sizing: border-box;
    user-select: none;
}

.info_name2 {
    font-weight: 400;
    letter-spacing: -0.7px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(41, 42, 50);
    font-size: 16px;
    line-height: 21px;
    margin-bottom: -1px;
    box-sizing: border-box;
}

.follow_name3 {
    color: rgb(140, 140, 140);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    white-space: nowrap;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.follow_name4 {
    font-weight: 400;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(116, 116, 123);
    font-size: 13px;
    line-height: 17px;
}

.ing_btn {
    border: none;
    margin: 0px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    height: 28px;
    padding: 6px 11px 5px 12px;
    border-radius: 14px;
    background: rgb(245, 245, 247);
    color: rgb(116, 116, 123);
    appearance: initial;
}

.ing_btn:hover {
    color: black;
    font-weight: 900;
}
</style>