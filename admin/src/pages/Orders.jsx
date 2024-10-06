import { backendUrl, currency } from "../App";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ admintoken }) => {
  const [allOrders, setAllOrders] = useState([]);
   
  const fetcAllOrdres = async () => {
    try {
      //  console.log(admintoken)
      if (!admintoken) {
        return null;
      }
      const responce = await axios.post(
        backendUrl + "/api/order/allorder",
        {},
        { headers: { admintoken } }
      );
      //console.log(responce.data.allOrders)
      if (responce.data.sucess) {
        setAllOrders(responce.data.allOrders.reverse());
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

const updatestatus = async(e,orderId)=>{
         
  try {

    if(!admintoken){
      return null
    
    }

   const responce = await axios.post(backendUrl+'/api/order/updatestatus',{orderId,status:e.target.value},{headers:{admintoken}})
    if(responce.data.sucess){
     await  fetcAllOrdres()
    }
    
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}


  useEffect(() => {
    fetcAllOrdres();
  }, [admintoken]);

  console.log(allOrders);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {allOrders.map((order, index) => (
          <div  className=' grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:my-4 text-xs sm:text-sm text-gray' key={index}>
          
          
            <img  className="w-12" src={assets.parcel_icon} alt="" />


            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p key={index} className="py-0.5">
                        
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p  className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p  className="mt-2 mb-2 font-medium">{order.address.firstname + " " + order.address.lastname}</p>
              <div>
                <p>{order.address.street + " ,"}</p>
                <p>
                  {order.address.city +
                    " ," +
                    order.address.state +
                    " ," +
                    order.address.country +
                    " ," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
              <div>
   

              </div>
            </div>

               
           <div>
            <p className="text-sm sm:text-[15px]">Items:{order.items.length}</p>
            <p className="mt-3">Method:{order.paymentMethod}</p>
            <p>Payment:{order.payment?"Done":"Pending"}</p>
            <p>Date:{new Date(order.date).toLocaleDateString()}</p>
           </div>


           <p className="text-sm sm:text-[15px]">{currency}{order.amount}</p>

           <select onChange={(e)=>updatestatus(e,order._id)}  value={order.status} className="p-2  font-semibold">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
           </select>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
