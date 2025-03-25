import {Ref} from "vue";

export class PostCreate {
    private _postId: string
    private _title: string
    private _content: string
    private _thumbnail: string
    private _categoryId: Number

    constructor(data: postCreateType) {
        this._postId = data.postId
        this._title = data.title.value
        this._content = data.content
        this._thumbnail = data.thumbnail
        this._categoryId = data.categoryId
    }
}

export type postCreateType = {
    postId: string,
    title: Ref<string>,
    content: string,
    thumbnail: string,
    categoryId: Number
}
