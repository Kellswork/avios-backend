import { Router } from 'express';
import createProducts from './controllers';

const router = Router();

router.use('/');

router.post('/products', createProduct);

export default router;
