import base from './index.js';

export const imageApi = {

    async uploadImage(data: FormData): Promise<string> {
        try {
            const response = await base.post('/api/v1/images',data);

            return response.data.imageUrl;
        } catch (e) {
            console.log('이미지 업로드 실패 : ', e)
        }
    }
}
