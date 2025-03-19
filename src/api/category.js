import base from './index.js'

export const getCategories = async () => {
    try {
        console.log('get categories')
        const response = await base.get('/api/v1/categories')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
