import { json } from "express";

export const createProduct = async (req, res) => {
    try {
      const {
        name,
        description,
        varitiesId,
        date_uploaded,
        date_edited,
        show
      } = req.body;
  
      const product = await addProduct({
        name,
        description,
        varitiesId,
        date_uploaded,
        date_edited,
        show
      });
  
      const data = {
        product,
      };
      return res.status(200).json('added')
    } catch (error) {
        return res.status(200).json('added')
    }
  };