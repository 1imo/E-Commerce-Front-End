import { Body, Controller, Get, NotFoundException, Param, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { AdminGuard } from 'src/admin/admin.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
  // Get Feed with pagination
  @Get()
  getFeed(@Query('lb') lb: number, @Query('ub') ub: number) {
    return this.productService.getFeed(lb, ub);
  }

  // Get Product
  @Get(':id')
  getProduct(@Param('id') id: string) {
    try {
        return this.productService.getProduct(id);
    } catch(e) {
        throw new NotFoundException("Product not found")
    }
  }

  // Test product POST
  @UseGuards(AdminGuard)
  @Post()
  createProduct(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return createProductDto.heading;
  }
}
