import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import ProductItem from './ProductItem';
import Tital from './Tital';


 
     
const RealatedProduct = ({Category,subcategory}) => {
 
    const {products}=useContext(Shopcontext);
    const [newdata,setnewdata]=useState(false)

    const getdata=()=>{
      if(products.length>0){
        let productCopy= products.slice();
        productCopy = productCopy.filter((item)=> Category === item.category)
        productCopy= productCopy.filter((item)=> subcategory === item.subCategory)
        
        //console.log(productCopy)
        setnewdata(productCopy);
      }
    }

    useEffect(()=>{
        getdata();
    },[products])

  return (
    <div className='my-16'>
      <div className='text-3xl text-center py-2 mb-6'>
        <Tital text1={'RELATED'} text2={'PRODUCTS'}/>

      </div>
      <div className='  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5'>
         {
          newdata && newdata.map((item,index)=>{
            return <ProductItem  key={index}  image={item.image} name={item.name} id={item._id} price={item.price}/>
          })
         }
      </div>
    </div>
  )
}

export default RealatedProduct