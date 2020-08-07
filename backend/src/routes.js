import { Router } from 'express';
import { getOneProduct, addProduct, removeProduct } from './controllers'
const router = Router();

router.get('/:id', getOneProduct);

router.post('/', addProduct);

router.delete('/:id', removeProduct);

export default router;
