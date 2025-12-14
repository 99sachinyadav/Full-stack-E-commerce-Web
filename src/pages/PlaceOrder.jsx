import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Tital from "../components/Tital";
import { Shopcontext } from "../context/Shopcontext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
    
    const {navigate, backendUrl,token,getCartAmount,cartItem,setCartItem,delevery_fee,products } = useContext(Shopcontext)
 const [method,setmethod]=useState('cod')

 const [formdata, setformdata]=useState({
  firstname:'',
  lastname:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zipcode:'',
  country:'',
  phone:'',
  
})

const onsubmitHandler =(e)=>{
   const name = e.target.name;
    const value = e.target.value;

    setformdata(data=>({...data,[name]:value}))
}

const submithandler= async (e)=>{
  e.preventDefault()
  try {
    let OrderItem =[];

    for(const items in cartItem){
        for( const item in cartItem[items]){
           const Orderinfo = structuredClone(products.find(product=>product._id === items)) // finding in products weather cartdata is match with product and crating a structeredclone in variable 
               if(Orderinfo){
                Orderinfo.size=item
                Orderinfo.quantity = cartItem[items][item]
                if(Orderinfo.quantity>0){
                  OrderItem.push(Orderinfo)
                }
               }
        }
    }

    let OrderData = {
      address:formdata,
     items:OrderItem,
     amount:getCartAmount()+delevery_fee
   }

    switch (method) {

       case 'cod':
          const responce = await axios.post(backendUrl+'/api/order/cod',OrderData,{headers:{token}})
          // console.log(responce);
          if(responce.data.sucess){
            setCartItem({})
            navigate('/order')
          }
          else{
            console.log(responce.data.message)
            toast.error(responce.data.message)
          }
       break;

       default:

        break;


    }
    
    //console.log(OrderItem)
  } catch (error) {
    console.log(error)
  }


 
}

  return (
    <form onSubmit={submithandler} className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ----------------------- LEFT SIDE------------------------- */}
      <div className=" flex flex-col gap-3 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Tital text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
          required
          onChange={onsubmitHandler} name="firstname" value={formdata.firstname}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
          required
          onChange={onsubmitHandler} name="lastname" value={formdata.lastname}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input 
         required
        onChange={onsubmitHandler} name="email" value={formdata.email}
          className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
          type="text"
          placeholder="Email address"
        />
        <input
         required
        onChange={onsubmitHandler} name="street" value={formdata.street}
          className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
           required
          onChange={onsubmitHandler} name="city" value={formdata.city}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
           required
          onChange={onsubmitHandler} name="state" value={formdata.state}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
           required
          onChange={onsubmitHandler} name="zipcode" value={formdata.zipcode}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="Zipcode"
          />
          <input
           required
          onChange={onsubmitHandler} name="country" value={formdata.country}
            className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
            type="text"
            placeholder="country"
          />
        </div>
      
        <input
         required
          onChange={onsubmitHandler} name="phone" value={formdata.phone}
          className=" border border-gray-300 rounded px-3.5 py-1.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* right side */}

      <div className="mt-8 ">
        <div className="min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12 w-xl sm:w-2xl">
          <Tital text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex  flex-col lg:flex-row gap-3">
             <div onClick={()=>setmethod('strip')} className="flex items-center gap-3 border border-gray-500 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method==='strip'?'bg-green-400':''} `}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
             </div>
             <div onClick={()=>setmethod('razorpay')} className="flex items-center gap-3 border border-gray-500 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
             </div>
             <div onClick={()=>setmethod('cod')} className="flex items-center gap-3 border border-gray-500 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
             </div>
          </div>
            <div className="w-full text-end">
              <button type="submit"   className="px-8 py-2 text-sm bg-black text-white mt-3 rounded">PLACE ORDER</button>
            </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
