<template>
    <div class="chatRoom">
        <div class="contents-info" id="content-info">
            <img :src="logoImg" class="logo-image" />
            <h3>{{ roomName }}</h3>
        </div>

        <div class="chatting">
            <textarea id="chat-box" cols="30" rows="10">채팅 예절을 지켜주세요!</textarea>
            <input type="text" id="message" />
            <button @click="sendMessage" id="send">보내기</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useMemberStore } from "../stores/useMemberStore.js";

export default {
    props: ["roomName"],
    setup() {
        const memberStore = useMemberStore();

        return {
            memberStore,
        };
    },
    data() {
        return {
            logoImg:
                "https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg", //content db와 연결해서 roomName에 맞는 이미지 가져오는 것으로 수정 필요
            messagesArea: null,
            messageInput: null,
            sendBtn: null,
            randomInt: Math.floor(Math.random() * 30),
            socket: null,
        };
    },
    mounted() {
        this.messagesArea = document.getElementById("chat-box");
        this.messageInput = document.getElementById("message");
        this.sendBtn = document.getElementById("send");

        this.socket = new WebSocket("ws://localhost:8080/ws/chat");
        this.socket.onopen = this.handleSocketOpen;
        this.socket.onmessage = this.handleSocketMessage;
        this.socket.onclose = this.handleSocketClose;
    },
    methods: {
        async handleSocketOpen() {
            try {
                const response = await axios.get("http://www.bookspedia.kro.kr/api/chat", {
                    params: { name: this.roomName },
                });
                const response1 = await axios.post(
                    "http://www.bookspedia.kro.kr/api/content/readByName",
                    { name: this.roomName },
                    { headers: { "Content-Type": "application/json" } }
                );

                const messages = response.data;
                const content = response1.data;

                if (content && content.filename) {
                    this.logoImg = content.filename;
                }

                messages.forEach((msg) => {
                    this.messagesArea.value += `\n${msg.sender} : ${msg.message}`;
                });
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
            const chatMessage = {
                type: "ENTER",
                roomName: this.roomName,
                sender: this.memberStore.member.nickname,
            };
            this.socket.send(JSON.stringify(chatMessage));
        },
        handleSocketMessage(event) {
            const message = JSON.parse(event.data);
            if (message.sender !== this.memberStore.member.nickname) {
                this.messagesArea.value += `\n${message.sender} : ${message.message}`;
            }
        },
        handleSocketClose() {
            console.log("연결해제");
        },
        sendMessage() {
            const messageContent = this.messageInput.value;
            const chatMessage = {
                type: "TEXT",
                roomName: this.roomName,
                sender: this.memberStore.member.nickname,
                message: messageContent,
            };

            this.messagesArea.value += "\n" + chatMessage.sender + ":" + messageContent;
            this.socket.send(JSON.stringify(chatMessage));
            this.messageInput.value = "";
        },
    },
};
</script>

<style scoped>
.chatRoom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 69.5vh;
}

.contents-info {
    margin-right: 10px;
}

.logo-image {
    width: 273px;
    height: 371px;
}

#chat-box {
    position: relative;
    bottom: 30px;
    width: 400px;
    height: 300px;
    resize: none;
    text-align: left;
    display: flex;
    flex-direction: column;
    /* Stack child elements vertically */
    align-items: center;
    /* Center child elements horizontally */
}

#message {
    width: 300px;
    height: 20px;
}

#send {
    position: relative;
    top: 1px;
    margin-left: 10px;
    height: 26px;
}
</style>
