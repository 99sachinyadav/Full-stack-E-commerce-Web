import express from 'express'
import mongoose from 'mongoose'
import { addProduct ,listProduct,removeProduct,singleProduct } from '../controllers/productController.js';
import upload from '../middelware/multer.js';
import Authadmin from '../middelware/Auth.js';


const productRoute = express.Router();

productRoute.post('/addproduct',Authadmin,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct)
productRoute.get('/productlist',listProduct)
productRoute.post('/deleteProduct',Authadmin,removeProduct)
productRoute.get('/singleProduct',singleProduct)

export default productRoute;