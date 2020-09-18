import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
    // expression: `
    //     SELECT "post"."id" "id", "post"."name" AS "name", "category"."name" AS "categoryName"
    //     FROM "post" "post"
    //     LEFT JOIN "category" "category" ON "post"."categoryId" = "category"."id"
    // `
    // expression: 'SELECT product_id,category_name,product_name,unit_price,description FROM public."v_CatProduct"'
    expression:
        ` 
    SELECT 
        ca.category_name,
        ca.description,
        p.product_id,
        p.product_name,
        p.unit_price
    FROM categories ca
     JOIN products p ON p.category_id = ca.category_id
    ORDER BY ca.category_id, p.product_name;
    `
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