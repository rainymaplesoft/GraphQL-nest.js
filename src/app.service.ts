import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { Connection, EntityManager } from 'typeorm';
import { VCategoryProduct } from './db/entity/vCatProduct';
import { CategoryProduct } from './modules/northwind/models/category.model';

@Injectable()
export class AppService {
  private _manager: EntityManager;
  constructor(
    // @InjectModel(CatProduct)
    // private catModel: typeof CatProduct, private sequelize: Sequelize
    private connection: Connection
  ) {
    this._manager = this.connection.manager;
  }

  async findAllViewCatProduct() {
    const catProduct: any = await this._manager.find(VCategoryProduct)
    return catProduct.map(c => ({
      productId: c.product_id,
      productName: c.product_name,
      categoryName: c.category_name,
      unitPrice: c.unit_price,
      description: c.description
    }))
  }

}
