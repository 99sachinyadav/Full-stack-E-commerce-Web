import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import Tital from "../components/Tital";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search ,showSearch} = useContext(Shopcontext);
  const [filter, setfilter] = useState(false);
  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [Subcategory, setSubcategory] = useState([]);
  const [sortType, setsortType] = useState("relavant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value)); // agar pahle sa koi same elemnt presnt hoga to use nahi lange
    } else {
      // console.log(e.target.value)
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubCategory = (e) => {
    if (Subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value)); // agar pahle sa koi same elemnt presnt hoga to use nahi lange
    } else {
      // console.log(e.target.value)
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();
     
    if(showSearch && search){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (Subcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        Subcategory.includes(item.Subcategory)
      );
    }
    setfilterProduct(productCopy);
  };

  //logic for sorting the product
  const sortProduct = () => {
    const fpCopy = filterProduct.slice();
    switch (sortType) {
      case "low-high":
        setfilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, Subcategory,search,showSearch,products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* ading category checkbox */}
      <div className="min-w-60">
        <p
          onClick={() => setfilter(!filter)}
          className="my-2 text-xl flex items-center  cursor-pointer gap-2"
        >
          FILTER
          <img
            onClick={() => setfilter(!filter)}
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${filter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        <div
          className={`border border-gray-300 py-3 my-5 pl-5 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className=" text-sm mb-3  font-medium">CATEGAORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* adding subcatogery here */}

        <div
          onClick={() => setfilter(true)}
          className={`border border-gray-300 py-3 my-5 pl-5 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className=" text-sm mb-3  font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={togglesubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={togglesubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={togglesubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Tital text1={"ALL"} text2={"COLLECTION"} />
          <select
            onChange={(e) => setsortType(e.target.value)}
            className=" boreder-2 px-2 text-sm border-gray-300"
          >
            <option value="relavant">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct &&
            filterProduct.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  id={item._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
