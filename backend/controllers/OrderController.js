//placing order using cash on delivery

import { OrderModel } from "../models/Ordermodel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const OrderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new OrderModel(OrderData);

    await newOrder.save();
    await OrderModel.findByIdAndUpdate(userId, { cartdata: {} });

    res.json({ sucess: true, message: "Ordered Placed" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};
//placing order using Strip method
const placeOrderStrip = async (req, res) => {};

// placing order using razorpay
const placeOrderRazorpay = async (req, res) => {};

// all order for Admin pannel

const allOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({});
    res.json({
      sucess: true,
      message: "all product fetched sucessfully",
      allOrders,
    });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

// User Order data for frontend
const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    //console.log(userId)
    const Order = await OrderModel.find({ userId });
    //console.log(Order)
    res.json({ sucess: true, Order });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

// update Order status for admin pannel

const updateStaus = async (req, res) => {

   const {orderId,status}=req.body
   try {

    const updatedOrder= await OrderModel.findByIdAndUpdate(orderId,{status})
     res.json({sucess:true,updatedOrder})
    
   } catch (error) {
     console.log(error.message)
     res.json({sucess:false,message:error.message})
   }
};

export {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStrip,
  allOrders,
  userOrder,
  updateStaus,
};
