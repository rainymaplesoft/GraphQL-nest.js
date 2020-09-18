import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    expression: 'SELECT * FROM public."v_CatProduct"'
    // expression:
    //     ` 
    // SELECT 
    //     ca.category_name,
    //     ca.description,
    //     p.product_id,
    //     p.product_name,
    //     p.unit_price
    // FROM categories ca
    //  JOIN products p ON p.category_id = ca.category_id
    // ORDER BY ca.category_id, p.product_name;
    // `
})
export class VCategoryProduct {

    @ViewColumn()
    product_id: number;

    @ViewColumn()
    category_name: string;

    @ViewColumn()
    product_name: string;

    @ViewColumn()
    unit_price: number;

    @ViewColumn()
    description: string;
}