export interface INotification {
    _id: string;
    type: string;
    title: string;
    message: string;
    data: any;
    readBy: string[]; 
    createdAt: Date;
}

export class Notification implements INotification {
    _id: string;
    type: string;
    title: string;
    message: string;
    data: any;
    readBy: string[];
    createdAt: Date;

    constructor(obj: Partial<INotification> = {}) {
        const {
            _id = "",
            type = "",
            title = "",
            message = "",
            data = {},
            readBy = [],
            createdAt = new Date(),
        } = obj;
        this._id = _id;
        this.type = type;
        this.title = title;
        this.message = message;
        this.data = data;
        this.readBy = readBy;
        this.createdAt = createdAt;
    }
}
