import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStrip, updateStaus, userOrder } from '../controllers/OrderController.js';
import Authadmin from '../middelware/Auth.js';
import AuthUser from '../middelware/userAuth.js';

const OrderRouter = express.Router();
//payment featers
OrderRouter.post('/cod',AuthUser,placeOrder)
OrderRouter.post('/strip',AuthUser,placeOrderStrip)
OrderRouter.post('/razorpay',AuthUser,placeOrderRazorpay)
//user featers
OrderRouter.post('/userorder',AuthUser,userOrder)
//admin features
OrderRouter.post('/allorder',Authadmin,allOrders)
OrderRouter.post('/updatestatus',Authadmin,updateStaus)

export default OrderRouter