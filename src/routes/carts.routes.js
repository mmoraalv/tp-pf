import { Router } from 'express';
import cartsController from '../controllers/carts.controller.js';
const cartRouter = Router();

cartRouter.get('/', cartsController.getCarts);
cartRouter.get('/:cid', cartsController.getCart);
cartRouter.post('/', cartsController.postCart);
cartRouter.put('/:cid/product/:pid', cartsController.putProductToCart);
cartRouter.put('/:cid/products/:pid', cartsController.putQuantity);
cartRouter.put('/:cid', cartsController.putProductsToCart);
cartRouter.delete('/:cid', cartsController.deleteCart);
cartRouter.delete('/:cid/products/:pid', cartsController.deleteProductFromCart);

export default cartRouter;