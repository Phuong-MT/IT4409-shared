export interface IProduct {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder{
    _id: string;
    listProduct: IProduct[];
    userId: string;
    sumPrice: number;
    note: string;
    toAddress: string;
}

