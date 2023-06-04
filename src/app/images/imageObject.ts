export class ImageObject {

    constructor(private _source: string, private _description: string) {
    }

    public set source(src: string) {
        this._source = src;
    }

    public get source() {
        return this._source;
    }

    public set description(desc: string) {
        this._description = desc;
    }

    public get description() {
        return this._description;
    }
}