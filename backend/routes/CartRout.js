import express from 'express'
import { AddtoCart,GetUserCart,UpdateCart } from '../controllers/cartController.js'
import AuthUser from '../middelware/userAuth.js';

 const CartRouter = express.Router();

 CartRouter.post('/get',AuthUser,GetUserCart)
 CartRouter.post('/Add',AuthUser,AddtoCart)
 CartRouter.post('/update',AuthUser,UpdateCart)

 export default CartRouter