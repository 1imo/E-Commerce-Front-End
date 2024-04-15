import { Injectable } from '@nestjs/common';
import { products } from 'src/JSON_TEST_DATA/Index';

@Injectable()
export class ProductService {
  private products = products;

  getFeed(lb: number, ub: number) {
    return this.products.slice(lb - 1, ub);
  }

  getProduct(id: string) {
    const p = this.products.find((product) => product.id === +id);

    if(!p) {
      throw new Error('Product not found');
    }

    return p;
  }
}
