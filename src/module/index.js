import {createStore} from "vuex";
import {category} from "@/module/category.js";
import {post} from "@/module/post.js";

export const store = createStore({
        modules: {
            category,
            post
        }
    }
)
