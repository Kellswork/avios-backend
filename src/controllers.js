import {getProduct } from './models/models'
import db from './models/db'
export const getOneProduct = async(req, res) => {
    try {
      const { rows } = await db.query(getProduct, [1]);
      if (!rows[0]) {
        return res.status(404).json({
          error: "no products with id found"
        });
      }
      console.log(rows)
      return res.status(200).json({
        products: rows[0]
      });
    } catch (err) {
        console.log(err)
      return res.status(500).json({
        error: err.message
      });
    }
  }


// export const createProduct = async (req, res) => {
//     try {
//       const {
//         name,
//         description,
//         varitiesId,
//         date_uploaded,
//         date_edited,
//         show
//       } = req.body;
  
//       const product = await addProduct({
//         name,
//         description,
//         varitiesId,
//         date_uploaded,
//         date_edited,
//         show
//       });
  
//       const data = {
//         product,
//       };
//       return res.status(200).json('added')
//     } catch (error) {
//         return res.status(200).json('added')
//     }
//   };