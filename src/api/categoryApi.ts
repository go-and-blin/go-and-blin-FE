import base from './index.js'

export const categoryApi = {
    getCategories: async () => {
        try {
            const response = await base.get('/api/v1/categories')
            console.log(response.data)
            return response.data
        } catch (e) {
            console.error(e)
        }
    }
}

