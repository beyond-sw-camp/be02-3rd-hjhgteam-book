<template>
    <div id="chatroomBox">
        <div v-for="chatroom in chatroomData" :key="chatroom.roomName" class="chatroomDiv">
            <router-link :to="{ path: '/chat', query: { roomName: chatroom.roomName } }" class="chatroom">
                {{ chatroom.roomName }}
            </router-link>
        </div>
        <router-view></router-view>
        <hr>

        <h4 class="createchat">채팅방 생성</h4>
        <input  class="createchat" type="text" id="createRoomName" v-model="newChatroomName" />
        <button @click="createChatroom">전송</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ChatListPage",

    data() {
        return {
            chatroomData: [],
        };
    },
    methods: {
        async fetchChatrooms() {
            try {
                const response = await axios.get("http://www.bookspedia.kro.kr/api/chat/list");
                this.chatroomData = response.data;
            } catch (error) {
                console.error("Error fetching chatrooms", error);
            }
        },
        async createChatroom() {
        try {
          await axios.post(
            "http://localhost:8080/chat/create",
            { name: this.newChatroomName },
            { headers: { 'Content-Type': 'application/json' } }
          );
          // After creating the chatroom, refresh the list
          await this.fetchChatrooms();
          // Clear the input field
          this.newChatroomName = '';
        } catch (error) {
          console.error("Error creating chatroom", error);
        }
      },
    },
    mounted() {
        this.fetchChatrooms();
    },
};
</script>

<style scoped>
#chatroomBox {
    position: relative;
    width: 800px;
    height: 500px;
    border: solid black 1px;
    margin: auto;
    /* Center the element horizontally */
}

.chatroom {
    position: relative;
    margin-left: 10px;
    margin-top: 20px;
}

.chatroomDiv {
    border: black solid 3px;
    padding: 10px;
    margin: 10px 20px 0px;
}
.createchat{
    margin-left: 20px;
}
</style>
