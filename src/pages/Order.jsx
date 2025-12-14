import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "../context/Shopcontext"
import Tital from "../components/Tital"
import { toast } from "react-toastify"
import axios from "axios"

 

const Order = () => {
  const {backendUrl,token, currency}= useContext(Shopcontext)
  const [Orderdata,setOrdereddata]=useState([])

     const loadOrderedData = async()=>{
      try {
        if(!token){
          return null;
        }
        //most logical part
        const responce =  await axios.post(backendUrl+'/api/order/userorder',{},{headers:{token}})
        //console.log(responce.data.Order)
        if(responce.data.sucess){
         let allOrderItems=[]
         console.log(responce.data)
         responce.data.Order.map((order)=>{
            order.items.map((item)=>{
            item['status']=order.status
            item['payment'] =order.paymentMethod
            item['paymentMethod']=order.paymentMethod
           item['date']=order.date
            allOrderItems.push(item) })
        })
          setOrdereddata(allOrderItems.reverse())
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
     }
  console.log(Orderdata)
     useEffect(()=>{
  loadOrderedData()
     },[token])
  return (
   <div className="border-t pt-16">
    <div className="text-2xl">
      <Tital text1={'MY'} text2={'ORDER'}/>
    </div>

     <div>
         { 
          Orderdata && Orderdata.map((item,index)=>{
             return <div className="border-b border-t border-gray-200 flex flex-col  md:flex-row md:items-center md:justify-between gap-4"  key={index}>
               <div className="flex  flex-row items-start justify-between gap-10 text-sm  m-4">
                <img src={item.image[0]} className=" w-16 sm:w-20" alt="" />
                   <div>
                   <p className=" sm:text-base font-medium">{item.name}</p>
                     <div className=" flex  items-center text-base text-gray-600 gap-4 ">
                      <p>{currency}{item.price}</p>
                      <p>Quantity:{item.quantity}</p>
                      <p> {item.size}</p>
                     </div>
                     <p className="mt-1">Date: <span className="text-gray-500"> {new Date(item.date).toDateString()}</span></p>
                     <p className="mt-1">Payment: <span className="text-gray-500"> {item.paymentMethod}</span></p>
                   </div>
                   <div className="md:w-1/2 flex justify-between">
                   <div className="flex items-center justify-center gap-2">
                         <p className="min-w-2 h-2 rounded-full bg-green-500 "></p>
                         <p className="text-sm md:text-base">{item.status}</p>
                   </div>
                   </div>
              
               </div>
               <button  onClick={loadOrderedData} className=" px-3 py-2   text-sm font-medium border  ml-2 rounded-md">Track Order</button>
                
             </div>
          })
         }
     </div>


   </div>
  )
}

export default Order