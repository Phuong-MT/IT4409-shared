import { Contacts } from "../contacts";
const STATUS = Contacts.Status;

export interface IProduct {
    _id: string;
    title: string;
    description: string;
    descriptionDetail: string;
    price: string;
    quantity: number;
    categoryId: string;
    isHide: (typeof STATUS)[keyof typeof STATUS];
    imageUrl: string[];
}

export class Product implements IProduct {
    _id: string;
    title: string;
    description: string;
    descriptionDetail: string;
    price: string;
    quantity: number;
    categoryId: string;
    isHide: (typeof STATUS)[keyof typeof STATUS];
    imageUrl: string[];
    constructor(obj: Partial<IProduct> = {}) {
        const {
            _id = "",
            title = "",
            description = "",
            descriptionDetail = "",
            price = "",
            quantity = -1,
            categoryId = "",
            isHide = STATUS.HIDE,
            imageUrl = [],
        } = obj;
        this._id = _id;
        this.title = title;
        this.description = description;
        this.descriptionDetail = descriptionDetail;
        this.price = price;
        this.quantity = quantity;
        this.categoryId = categoryId;
        this.isHide = isHide;
        this.imageUrl = imageUrl;
    }
}
