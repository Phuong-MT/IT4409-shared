export enum METHOD{
    COD = "COD",
    BANK_TRANSFER = "BANK_TRANSFER"
}

export enum DELIVERY{
    STANDARD = "STANDARD",
    EXPRESS = "EXPRESS",
    PICKUP = "PICKUP"
}

export interface IPayment{
    _id: string;
    userId: string;
    orderId: string;
    method: METHOD;
    totalMoney: number;
    discount: number;
    delivery: DELIVERY;
}