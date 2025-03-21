export class Post {
    private _id:string
    private _title:string
    private _content:string
    private _nickname:string
    private _thumbnail:string
    private _createTime:string

    constructor(id: string, title: string, content: string = "", nickname: string = "", thumbnail: string = "", createTime: string) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._nickname = nickname;
        this._thumbnail = thumbnail;
        this._createTime = createTime;
    }


    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get nickname(): string {
        return this._nickname;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    get createTime(): string {
        return this._createTime;
    }
}
