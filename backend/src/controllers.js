import { getProduct } from './models/models';
import db from './models/db';
export const getOneProduct = async (req, res) => {
  try {
    const { rows } = await db.query(getProduct, [1]);
    if (!rows[0]) {
      return res.status(404).json({
        error: 'no products with id found',
      });
    }

    console.log(rows);
    const {
      id,
      name,
      description,
      date_uploaded,
      date_edited,
      size,
      colour,
      quantity,
      image1,
      image2,
      is_available,
      price,
    } = rows[0];

    const products = {
      id,
      name,
      description,
      is_available,
      date_uploaded,
      date_edited,
    };

    products.varities = {
      colour,
      quantity,
      image1,
      image2,
      size,
      price,
    };

    return res.status(200).json({
      data: products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err.message,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = await db.query(products, [...req.body]);
    res.status(201).json({
      data: {
        message: 'product added succesfully',
        product,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: err.message,
    });
  }
};
