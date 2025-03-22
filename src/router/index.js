import {createRouter, createWebHistory} from "vue-router";
import MainView from "@/components/view/MainView.vue";
import PostWriteView from "@/components/view/PostWriteView.vue";

const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: '/write',
        component:PostWriteView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
