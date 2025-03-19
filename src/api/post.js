import base from './index.js'

export const getPosts = async (id) =>{
    try {
        const response = await base.get('/api/v1/posts',{
            params: {
                cursor: id === undefined ? "" : id,
            }
        })
        console.log(response.data)
        return response.data
    }catch (e){
        console.log(e)
    }
}
