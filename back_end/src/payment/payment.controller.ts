import { Controller, Get } from '@nestjs/common';

@Controller('payment')
export class PaymentController {
  @Get()
  getPayment() {
    return 'Payment';
  }
}
