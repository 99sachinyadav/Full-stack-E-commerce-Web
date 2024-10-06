import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import RealatedProduct from "../components/RealatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart} = useContext(Shopcontext);
  const [productdata, setProductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size,setsize]=useState('')

  const fetchProductdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setimage(item.image[0]);
        setProductdata(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductdata();
   
  }, [productId, products]);
  
  return productdata ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/*Product data*/}
      <div className="flex  gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*product image */}
        <div className="flex-1  flex flex-col-reverse gap-3 sm:flex-row   ">
          <div className=" flex sm:flex-col sm:overflow-y-scroll overflow-x-auto  justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productdata.image.map((item, index) => {
              return (
                <img
                  onClick={() => setimage(item)}
                  key={index}
                  src={item}
                  className="w-[24%] sm:w-full sm:mb-3  cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product information */}
        <div className="flex-1">
          <h1 className=" mt-2 text-2xl font-medium">{productdata.name}</h1>
          <div className=" flex  items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2 font-semibold">(122)</p>
          </div>
          <p className="mt-5 font-medium  text-3xl">
            {currency}
            {productdata.price}
          </p>
          <p className="mt-5  text-gray-500 md:w-4/5">
            {" "}
            {productdata.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-2">
              {productdata.size.map((item, index) => {
                return (
                  <button onClick={()=>setsize(item)} className={`px-4 py-2 bg-gray-300 ${size===item?'border border-orange-500':''}`} key={index}>
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <button onClick={()=>addToCart(productdata._id,size)} className="bg-black text-white px-8 py-3 text-sm  active:bg-gray-700 rounded">ADD TO CART</button>
          <hr  className="mt-8  w-full sm:w-3/4"/>
          <div className="text-sm  text-gray-500 mt-5  flex flex-col  gap-1 ">
            <p>100% orignal Product</p>
            <p>Cash on delivery</p>
            <p>Easy to return policy</p>
          </div>
        </div>
      </div>
       
       <div  className="mt-20">
           <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Rewiew (122)</p>
           </div>

           <div className=" mt-10 px-6 py-6 text-sm flex flex-col gap-4 border text-gray-500">
               <p  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, consequuntur? Consequuntur quae repellat officia aut. Rerum, cumque. Iusto, eius accusamus perspiciatis iste consequuntur sequi earum excepturi voluptate a dignissimos deleniti.
               Explicabo molestiae quidem provident, temporibus quas ut libero voluptatem placeat vero enim, sint facere reprehenderit tempora dolor, quisquam alias accusantium. Id cum quis perspiciatis, nobis hic magnam sunt temporibus ratione!</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestiae cupiditate velit vero quaerat temporibus aperiam doloribus, hic, vel deserunt corrupti saepe sapiente magnam autem iusto, ipsam adipisci tempora. Libero!</p>
           </div>
       </div>

       {/* display related products */}

       <RealatedProduct Category={productdata.category} subcategory={productdata.subCategory}/>
       
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
