CREATE VIEW v_CatProduct
AS
    SELECT ca.category_name,
        ca.description,
        p.product_id,
        p.product_name,
        p.unit_price
    FROM categories ca
        JOIN products p ON p.category_id = ca.category_id
    ORDER BY ca.category_id, p.product_name;