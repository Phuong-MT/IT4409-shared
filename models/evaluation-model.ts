import { Contacts } from "../contacts";

const RATE = Contacts.Rate;
const STATUS = Contacts.Status;

export interface IEvaluation {
    _id: string;
    userId: string;
    productId: string;
    parentEvaluationId: string;
    content: string;
    imageUrlFeedback: string[];
    rate: (typeof RATE)[keyof typeof RATE];
    isHide: (typeof STATUS)[keyof typeof STATUS];
}

export class Evaluation implements IEvaluation {
    _id: string;
    userId: string;
    productId: string;
    parentEvaluationId: string;
    content: string;
    rate: (typeof RATE)[keyof typeof RATE];
    isHide: (typeof STATUS)[keyof typeof STATUS];
    imageUrlFeedback: string[];
    constructor(obj: Partial<IEvaluation> = {}) {
        const {
            _id = "",
            userId = "",
            productId = "",
            parentEvaluationId = "",
            content = "",
            rate = RATE.FIVE,
            isHide = STATUS.HIDE,
            imageUrlFeedback = [],
        } = obj;
        this._id = _id;
        this.userId = userId;
        this.productId = productId;
        this.parentEvaluationId = parentEvaluationId;
        this.content = content;
        this.rate = rate;
        this.isHide = isHide;
        this.imageUrlFeedback = imageUrlFeedback;
    }
}
