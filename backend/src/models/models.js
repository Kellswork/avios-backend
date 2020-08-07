export const getProduct = 'SELECT products.*, prod_varities.* FROM products INNER JOIN prod_varities on prod_varities.prod_id=products.id WHERE products.id=$1';
