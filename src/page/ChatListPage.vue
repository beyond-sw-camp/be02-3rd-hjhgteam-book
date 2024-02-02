<template>
    <div id="chatroomBox">
      <div v-for="chatroom in chatroomData" :key="chatroom.roomName" class="chatroomDiv">
        <router-link :to="{ path: '/chat', query: { roomName: chatroom.roomName } }" class="chatroom">
          {{ chatroom.roomName }}
        </router-link>
      </div>
      <router-view></router-view>

    </div>

  </template>
  

<script>
import axios from 'axios';

export default {
    name: 'ChatListPage',

    data() {
        return {
            chatroomData: [],
        };
    },
    methods: {
        async fetchChatrooms() {
            try {
                const response = await axios.get("http://localhost:8080/chat/list");
                this.chatroomData = response.data;
            } catch (error) {
                console.error("Error fetching chatrooms", error);
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
</style>
  