// function to create add product
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/Productmodel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      Subcategory,
      bestSeller,
      size,
    
    } = req.body;

    // console.log( name,
    //   description, 
    //    price,
    //   category,
    //   Subcategory,
    //   bestSeller,
    //   size,)
     
     //console.log(name)
     
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const image = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageUrl = await Promise.all(
      image.map(async (item) => {
        let results = await cloudinary.uploader.upload(item.path, {
          resource_type: "auto",
        });

        return results.secure_url;
      })
    );
    const productData = {
      name,
      description,
      price: Number(price),
      image: imageUrl,
      category,
      Subcategory,
      size: JSON.parse(size),
      bestSeller: bestSeller === "true" ? true : false,
      date: Date.now(),
    };

    //console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({
      sucess: true,
      message: "Product saved successfully",
     
    });
  } catch (error) {
    console.log(error);
    res.json({sucess: false,message:ErrorEvent.message})
  }
};
// function  to  list the whole products
const listProduct = async(req, res) => {
      
try {
const findproduct = await productModel.find({})
res.status(200)
.json({sucess:true,findproduct})
} catch (error) {
    console.log(error);
    res.json({sucess: false,message:ErrorEvent.message})
}



};
//function to remove the products
const removeProduct = async (req, res) => {
      try {
        const {id} = req.body;


       await productModel.findByIdAndDelete(id)
        res.json({sucess:true,message:"product is removed sucessfully"})

      } catch (error) {
        console.log(error)
        res.json({sucess:false, message:error.message})  
      }
};
// functon to show the single product
const singleProduct = async (req, res) => {
    try {
         const {id}=req.body
        const singleproduct= await  productModel.findById(id)
         res
         .status(200)
         .json({sucess:true,singleproduct})
    } catch (error) {

      res.status(506)
      .json({sucess:false,message:error.message})
    }
};

export { addProduct, listProduct, removeProduct, singleProduct };

