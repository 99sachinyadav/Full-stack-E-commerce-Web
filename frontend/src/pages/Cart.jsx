import { useContext, useEffect,useState } from "react"
import { Shopcontext } from "../context/Shopcontext"
import Tital from "../components/Tital"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
  

const Cart = () => {
  const {products,cartItem,currency ,updateQuatity,navigate} = useContext(Shopcontext)
 
    const [cartdata,setcartdata]= useState([]);

    useEffect(()=>{
      if(products.length>0){
        const data =[]
        for( let items in cartItem){
          for(let item in cartItem[items]){
             if(cartItem[items][item]>0){
              data.push({
                _id:items,
                size:item,
                quantity:cartItem[items][item]
              })
             }
          }
        }
         setcartdata(data)
        
      }
    },[cartItem,products])
     // console.log(cartdata)
  return (
    <div className="border-t  pt-14">
      <div className="text-2xl mb-3">
        <Tital text1={'YOUR'} text2={'CART'}/>
      </div>
     
      <div>
        {
          cartdata && cartdata.map((item,index)=>{
            const productdata= products.find((product)=> product._id===item._id)

            return (
              <div key={index}  className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:[4fr_2fr_0.5fr] items-center gap-4">
                     <div className="flex items-start gap-6">
                        <img  className="w-16 sm:w-20" src={productdata.image[0]} alt="" />
                        <div>
                          <p className="text-sm sm:text-lg font-medium ">{productdata.name}</p>
                          <div className=" flex items-center gap-5  mt-2">
                               <p >{currency}{productdata.price}</p>
                               <p className="px-2 sm:px-3 sm:py-1  boarder bg-slate-50">{item.size}</p>
                          </div>
                        </div>
                     </div>
                     <input onChange={(e)=>e.target.value===" " || e.target.value==='0'?null:updateQuatity(item._id,item.size,Number(e.target.value))} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity} />
                     <img  onClick={()=>updateQuatity(item._id,item.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
     <div className=" flex  justify-end my-20">
        <div className="w-full  border p-5 border-gray-400 sm:w-[400px]">
        <CartTotal/>
        <div className="mt-4 flex justify-end w-full ">
          <div  onClick={()=>navigate('/placeorder') } className="bg-black  text-white text-xs px-4 py-2 rounded">PROCEED TO CHECKOUT</div>
        </div>
        </div>
       
     </div>
    </div>
  )
}

export default Cart