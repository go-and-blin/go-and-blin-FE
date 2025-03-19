import {getCategories} from "@/api/category.js";

export const category = {
    namespaced: true,
    state: {
        categories: ['ALL', 'GO', 'BLIN', 'PROJECT' ]
    },
    getters: {
        categories: state => state.categories
    },
    mutations: {
    },
    actions: {
    }
}
