import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Tital from "./Tital";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(Shopcontext);
  const [bestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    const newdata = products.filter((item) => item.bestSeller);
    setBestProduct(newdata.slice(0,5));
  }, [products]);
  // console.log(bestProduct)
  return (
    <div className="py-10">
      <div className="text-center py-8 text-3xl">
        <Tital text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4   m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi
          minus voluptas deserunt vel quisquam possimus ea cumque fugit.
          
        </p>
      </div>
      {/* adding bestsellers section */}
       <div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
       {bestProduct &&
        bestProduct.map((item, index) => (
          <ProductItem
            key={index}
            image={item.image}
            price={item.price}
            name={item.name}
            id={item._id}
          />
        ))}
       </div>
    </div>
  );
};

export default BestSeller;
