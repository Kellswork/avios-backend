import db from './db';

const tableQuery = async () => {
  try {
    const dropProductTable = await db.query(
      'DROP TABLE IF EXISTS products CASCADE;'
    );
    const dropProd_varitiesTable = await db.query(
      'DROP TABLE IF EXISTS prod_varitiesTable CASCADE;'
    );

    const productTable = await db.query(`CREATE TABLE IF NOT EXISTS products(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) UNIQUE NOT NULL,
      description TEXT NOT NULL,
      varitiesId INT NOT NULL,
      date_uploaded DATE DEFAULT CURRENT_TIMESTAMP,
      date_edited DATE);`);

    const prod_varitiesTable = await db.query(`CREATE TABLE IF NOT EXISTS prod_varities(
        id SERIAL PRIMARY KEY,
        prod_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        size INT NOT NULL,
        colour TEXT NOT NULL,
        quantity INT DEFAULT 0,
        image1 TEXT,
        image2 TEXT,
        price TEXT
        );`);

    const insertProduct = await db.query(
      "INSERT INTO products(name, description, varitiesId) VALUES('iphone 6','mobile phone', 1 ) ;"
    );
    const insertProd_varieties = await db.query(
      "INSERT INTO prod_varities(prod_id, size, colour, quantity, price) VALUES(1, 10, 'white', 20, 1200  ) ;"
    );

    console.log(
      dropProd_varitiesTable,
      dropProductTable,
      productTable,
      prod_varitiesTable,
      insertProduct,
      insertProd_varieties
    );
  } catch (err) {
    console.log(err.stack);
    return err.stack;
  }
};

tableQuery();
