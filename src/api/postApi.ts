import base from './index.js'

export const postApi = {
    fetchPosts: async (id: string) => {
        try {
            const response = await base.get('/api/v1/posts', {
                params: {
                    cursor: id === undefined ? "" : id,
                }
            })
            return response.data
        } catch (e) {
            console.error(e)
        }
    },

    fetchPostId: async () => {
      try{
          const response = await base.post('/api/v1/posts/draft-id')
          return response.data
      }catch (e){
          console.error(e)
      }
    }
}


