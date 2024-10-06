import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext();

const ShopeContextProvider = (props) => {
  const currency = "$";
  const delevery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem,setCartItem]=useState({});
  const [products,setProducts]=useState([])
  const [token,setToken]=useState('');
   const navigate =  useNavigate()

  const addToCart  = async (itemId,size)=>{
       
     const cardata= structuredClone(cartItem)
    if(!size){
      toast.error('Please Select Product Size')
      return;
    }
     if(cardata[itemId]){
      if(cardata[itemId][size]){
        cardata[itemId][size]+=1
      }
      else{
        cardata[itemId][size]=1;
      }
     }
     else{
       cardata[itemId]={}
       cardata[itemId][size]=1;
     }
   setCartItem(cardata)
   
   if(token){
    try {
       const responce = await axios.post(backendUrl+'/api/cart/Add',{itemId,size},{headers:{token}})
      //  console.log(responce);
      toast.success(responce.data.message)
    } catch (error) {
       console.log(error)
       toast.error(error.message)
    }
   }

  }

  const getCounts =()=>{
          let count=0;
          for( let items in cartItem){
             for( let item in cartItem[items]){
                 if(cartItem[items][item]>0){
                   count = count+cartItem[items][item];
                 }
             }
          }
          return count;
  } 
// to modify the cart data or for deleation
  const updateQuatity = async (itemId,size,quantity)=>{
    let carddata=structuredClone(cartItem);
       carddata[itemId][size]=quantity;
      
       setCartItem(carddata)

       if(token){
        try {
          const responce = await axios.post(backendUrl+'/api/cart/update',{itemId,size,quantity},{headers:{token}})
          //  console.log(responce)
          toast.success(responce.data.message)
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
       }
       
  }

  


 const getPrductData = async ()=>{
 
  try {
     const responce=   await axios.get(backendUrl +'/api/product/productlist')
       //console.log(responce.data.findproduct)
       if(responce.data.sucess){
        setProducts(responce.data.findproduct)
       }
       else{
        
        toast.error(responce.data.message)
       }
  } catch (error) {
    toast.error(error.message)
     console.log(error)
  }
 }


 const getCartData = async (token)=>{
  try {
     if(token){
      const responce = await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
     await  setCartItem(responce.data.cartdata)
     // console.log(responce.data.cartdata)
     }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}


 const getCartAmount =  ()=>{
  let totalAmount = 0 ;
  for( const items in cartItem){
     const productinfo= products.find((product)=>  product._id  === items)
     for( const item in cartItem[items]){
        if(cartItem[items][item]>0){
         totalAmount += productinfo.price*cartItem[items][item]
        }
     }
  }
 // console.log(totalAmount)
  return totalAmount;
}  


 //getting cartdata from database to update UI



  useEffect(()=>{
     getPrductData();
  },[])
  
  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
      getCartData(localStorage.getItem('token'))
      
    }
  },[token])
  const val = {
    products,
    currency,
    delevery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItem,
    setCartItem,
    getCounts,
    updateQuatity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
     
  };
  return (
    <Shopcontext.Provider value={val}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopeContextProvider;
