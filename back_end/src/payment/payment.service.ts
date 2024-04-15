export abstract class PaymentService {
  abstract getPayment(): () => void;
}

abstract class Card implements PaymentService {
  abstract getPayment(): () => void;
}

export enum PaymentMethod {}
