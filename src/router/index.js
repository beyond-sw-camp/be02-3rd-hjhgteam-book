import { createRouter, createWebHistory } from 'vue-router'

import LoginComponent from '../components/LoginComponent.vue'
import SignupComponent from '../components/SignupComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/login', component: LoginComponent },
        { path: '/signup', component: SignupComponent },
    ]
})

export default router;