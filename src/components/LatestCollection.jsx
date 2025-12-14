import { useContext, useEffect, useState } from "react";

import { Shopcontext } from "../context/Shopcontext";
import Tital from "./Tital";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(Shopcontext);
  const [latestProduct, setlatestProduct] = useState([]);

  useEffect(() => {
    setlatestProduct(products.slice(0, 8));
  }, [products]);
 
 // console.log(latestProduct)
  return (
    <div className="my-10">
      <div className=" text-center py-8 text-3xl">
        <Tital text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4   m-auto text-xs sm:text-sm md:text-base text-gray-600">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolorum
          animi similique maiores veritatis recusandae ab quos quam voluptatem,
          pariatur quisquam repudiandae, adipisci velit, sed dignissimos
          asperiores necessitatibus officia quod.
        </p>
      </div>
      {/* adding tha cards of the latest product */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid:cols-4 lg:grid:cols-5 gap-4 gap-y-6 ">
      {latestProduct &&
        latestProduct.map((item, index) => (
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

export default LatestCollection;
