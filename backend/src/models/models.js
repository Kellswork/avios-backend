// export const getProduct = 'SELECT products.*, prod_varities.* FROM products INNER JOIN prod_varities on prod_varities.prod_id=products.id WHERE products.id=$1';

export const getProduct = 'SELECT * FROM products where id=$1' 

export const createProduct = "INSERT INTO products(name, description, is_available, colour, quantity, image1, image2, size, price) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9 ) ;"

// const updateProduct = 'UPDATE products SET status = $1, modifiedAt = NOW() WHERE id = $2';
export const deleteProduct = 'DELETE from products where id = $1';