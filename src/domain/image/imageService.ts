import {imageApi} from "@/api/imageApi";
import {Image} from "@/domain/image/image";

export const imageService = {
    async uploadImage(postId: string, file: Blob | File) {
        const data = new FormData();
        data.append('file', file);
        data.append('postId', postId);
        const url = await imageApi.uploadImage(data)
        return new Image(postId, url)
    }
}
