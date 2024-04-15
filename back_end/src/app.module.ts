import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentController } from './payment/payment.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController, PaymentController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
