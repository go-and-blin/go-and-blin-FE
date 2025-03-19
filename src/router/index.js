import {createRouter, createWebHashHistory} from "vue-router";
import MainView from "@/components/view/MainView.vue";

const routes = [{
    path:'/',
    component:MainView
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
