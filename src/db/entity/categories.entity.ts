
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CatProduct extends Model<CatProduct> {
    @Column
    product_id: number;

    @Column
    category_name: string;

    @Column
    product_name: string;

    @Column
    unit_price: number;

    @Column
    description: string;

    //category_name, description, product_id, product_name, unit_price
}