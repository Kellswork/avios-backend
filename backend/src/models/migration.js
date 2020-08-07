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
      size INT NULL,
      colour TEXT NULL,
      quantity INT DEFAULT 0,
      image1 TEXT,
      image2 TEXT,
      price TEXT,
      date_uploaded DATE DEFAULT CURRENT_TIMESTAMP,
      is_available boolean default false,
      date_edited DATE);`);

    const insertProduct = await db.query(
      "INSERT INTO products(name, description) VALUES('iphone 6','mobile phone') ;"
    );
    // const insertProd_varieties = await db.query(
    //   "INSERT INTO prod_varities(prod_id, size, colour, quantity, price) VALUES(1, 10, 'white', 20, 1200  ) ;"
    // );

    console.log(
      dropProductTable,
      productTable,
      insertProduct,
    );
  } catch (err) {
    console.log(err.stack);
    return err.stack;
  }
};

tableQuery();
