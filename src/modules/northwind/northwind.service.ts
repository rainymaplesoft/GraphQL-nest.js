
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { CatProduct } from '../../db/entity/categories.entity';
import { CategoryProduct } from './models/category.model';
import { QueryTypes } from 'sequelize';
import { Connection, EntityManager, getConnection } from "typeorm";
import { getManager } from "typeorm";
import { VCategoryProduct } from '../../db/entity/vCatProduct';

@Injectable()
export class NorthWindService {
    private _manager: EntityManager;
    constructor(
        // @InjectModel(CatProduct)
        // private catModel: typeof CatProduct, private sequelize: Sequelize
        private connection: Connection
    ) {
        this._manager = this.connection.manager;
    }

    async findAllViewCatProduct() {
        const query = 'SELECT * FROM public."v_CatProduct"';
        const catProduct: any = await this._manager.find(VCategoryProduct)
        return catProduct.map(c => ({
            productId: c.product_id,
            productName: c.product_name,
            categoryName: c.category_name,
            unitPrice: c.unit_price,
            description: c.description
        }))
    }
    // async findAllViewCatProduct() {
    //     const query = 'SELECT * FROM public."v_CatProduct"';
    //     const catProduct: any = await this.sequelize.query(query, { type: QueryTypes.SELECT });
    //     return catProduct.map(c => ({
    //         productId: c.product_id,
    //         productName: c.product_name,
    //         categoryName: c.category_name,
    //         unitPrice: c.unit_price,
    //         description: c.description
    //     }))
    // }

    // async findAll(): Promise<Category[]> {
    //     try {
    //         return this.catModel.findAll().then(
    //             cat => cat.map(c => ({
    //                 productId: c.product_id,
    //                 productName: c.product_name,
    //                 categoryName: c.category_name,
    //                 unitPrice: c.unit_price,
    //                 description: c.description
    //             })));
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

}