export class Image {
    private readonly _postId: string
    private readonly _url: string

    constructor(postId: string, url: string) {
        this._postId = postId;
        this._url = url;
    }


    get postId(): string {
        return this._postId;
    }

    get url(): string {
        return this._url;
    }
}
