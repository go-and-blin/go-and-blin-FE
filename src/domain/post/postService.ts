import {Post} from "@/domain/post/post";
import {postApi} from "@/api/postApi";

export const postService = {
    hasNext: true,

    getPosts: async function (id: string): Promise<Post[]> {
        if (!this.hasNext) return []
        const response = await postApi.fetchPosts(id)
        const posts: Post[] = response.posts
        this.hasNext = response.hasNext;

        return posts.map((post) => {
            console.log(post.id)
            return new Post(
                post.id,
                post.title,
                post.content,
                post.nickname,
                post.thumbnail,
                post.createTime)

        })
    }
}
