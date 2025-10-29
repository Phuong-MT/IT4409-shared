import { Contacts } from "../contacts";
const STATUS_EVALUATION = Contacts.Status.Evaluation;

export interface IProduct {
    _id: string;
    title: string;
    description: string;
    descriptionDetail: string;
    price: number;
    quantity: number;
    categoryId: string;
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
    imageUrl: string[];
}

export class Product implements IProduct {
    _id: string;
    title: string;
    description: string;
    descriptionDetail: string;
    price: number;
    quantity: number;
    categoryId: string;
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
    imageUrl: string[];
    constructor(obj: Partial<IProduct> = {}) {
        const {
            _id = "",
            title = "",
            description = "",
            descriptionDetail = "",
            price = -1,
            quantity = -1,
            categoryId = "",
            isHide = STATUS_EVALUATION.HIDE,
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
