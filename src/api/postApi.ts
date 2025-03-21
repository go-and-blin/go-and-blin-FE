import base from './index.js'

export const postApi = {
    fetchPosts: async (id: string) => {
        try {
            console.log('fetch posts')
            const response = await base.get('/api/v1/posts', {
                params: {
                    cursor: id === undefined ? "" : id,
                }
            })
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}


