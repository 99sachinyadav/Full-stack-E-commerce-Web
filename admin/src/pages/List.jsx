import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ admintoken }) => {
  const [productData, setproductData] = useState([]);

  const getProductList = async () => {
    try {
      const responce = await axios.get(
        backendUrl + "/api/product/productlist",
        { headers: { admintoken } }
      );
      if (responce.data.sucess) {
        setproductData(responce.data.findproduct);
        // console.log(responce.data.findproduct)
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

   const removeProduct = async (id)=>{
    //console.log(id)
      try {
        const responce = await axios.post(backendUrl+'/api/product/deleteProduct',{id},{headers:{admintoken}})
        console.log(responce)
        if(responce.data.sucess){
          toast.success(responce.data.message)
          await getProductList()
        }
        else{
          toast.error(responce.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
   }

  useEffect(() => {
    getProductList();
  }, []);
 // console.log(productData);
  return (
    <>
      <p className="mb-2">All Products List</p>

      <div className=" mb-2 hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-300">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/*Adding product list here */}

      {productData && productData.map((item,index)=>{
        return <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] py-1 border text-sm items-center m-2" key={index}>
           <img  className="w-12" src={item.image[0]} alt="" />
           <p>{item.name}</p>
           <p>{item.category}</p>
           <p>{currency}{item.price}</p>
           <p onClick={()=>removeProduct(item._id)} className="ttext-right md:text-center cursor-pointer text-lg">X</p>
        </div>
      })}
    </>
  );
};

export default List;
