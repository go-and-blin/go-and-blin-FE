import {getPosts} from "@/api/post.js";

export const post = {
    namespaced: true,
    state: {
        posts: [],
        hasNext: false,
    },
    getters: {
        posts: state => state.posts
    },
    mutations: {
        setPosts: (state, posts, hasNext) => {
            state.posts = posts
            state.hasNext = hasNext
        }
    },
    actions: {
        createPosts: async (context) => {
            const response = await getPosts();
            context.commit('setPosts', response.posts, response.hasNext)
        }
    }
}
