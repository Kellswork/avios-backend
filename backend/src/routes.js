import { Router } from 'express';
import { getOneProduct } from './controllers'
const router = Router();

router.get('/:id', getOneProduct);

export default router;
