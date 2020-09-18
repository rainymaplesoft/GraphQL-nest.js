import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { AppService } from './app.service';
import { CategoryProduct } from './modules/northwind/models/category.model';

@Injectable()
export class AppResolver {
  constructor(
    private appService: AppService
  ) { }

  @Query(() => String)
  async hello() {
    return 'hello world';
  }
  @Query(() => [CategoryProduct], { name: 'categories' })
  async getCategories() {
    return this.appService.findAllViewCatProduct();
  }
}
