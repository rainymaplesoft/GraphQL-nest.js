
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { CatProduct } from './entities/categories.entity';
import { Category } from './models/category.model';
import { QueryTypes } from 'sequelize';

@Injectable()
export class NorthWindService {
    // constructor() { }
    constructor(
        @InjectModel(CatProduct)
        private catModel: typeof CatProduct, private sequelize: Sequelize
    ) { }

    async findAllViewCatProduct() {
        const query = 'SELECT * FROM public."v_CatProduct"';
        const catProduct: any = await this.sequelize.query(query, { type: QueryTypes.SELECT });
        return catProduct.map(c => ({
            productId: c.product_id,
            productName: c.product_name,
            categoryName: c.category_name,
            unitPrice: c.unit_price,
            description: c.description
        }))
    }

    async findAll(): Promise<Category[]> {
        try {
            return this.catModel.findAll().then(
                cat => cat.map(c => ({
                    productId: c.product_id,
                    productName: c.product_name,
                    categoryName: c.category_name,
                    unitPrice: c.unit_price,
                    description: c.description
                })));
        } catch (error) {
            console.log(error);
        }

    }

}