

export interface RefundReport {
  id: string;
  orderId: string;
  paymentId: string;
  customerDetail: {
    name: string;
    email: string;
    phone: string;
  }
  refundBy: string;
  reason: string;
  amount: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class RefundReportModel implements RefundReport {
  id: string;
  orderId: string;
  paymentId: string;
  customerDetail: {
    name: string;
    email: string;
    phone: string;
  };
  refundBy: string;
  reason: string;
  amount: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<RefundReport> = {}) {
    this.id = data.id || '';
    this.orderId = data.orderId || '';
    this.paymentId = data.paymentId || '';
    this.reason = data.reason || '';
    this.customerDetail = data.customerDetail || { name: '', email: '', phone: '' };
    this.refundBy = data.refundBy || '';
    this.amount = data.amount || 0;
    this.images = data.images || [];
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }
}