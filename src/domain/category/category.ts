    export class Category {
        private readonly _id: number
        private readonly _title: string

        constructor(id: number, title: string) {
            this._id = id
            this._title = title
        }

        get id(): number {
            return this._id;
        }

        get title(): string {
            return this._title;
        }
    }
