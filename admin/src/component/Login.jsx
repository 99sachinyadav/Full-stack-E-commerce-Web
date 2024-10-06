import { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";


const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmithandler = async (e) => {
    try {
      e.preventDefault();
      const responce = await  axios.post(backendUrl+'/api/user/loginadmin',{email,password})
       if(responce.data.sucess){
        setToken(responce.data.admintoken)
       }
       else{
       toast.error(responce.data.message);
       }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
  };


  
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg px-6 py-2 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmithandler}>
          <div className="mb-3  min-w-72">
            <p className="text-sm font-medium mb-2 text-gray-700">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 outline-none border border-gray-300"
              type="text"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3  min-w-72">
            <p className="text-sm font-medium mb-2 text-gray-700">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 outline-none border border-gray-300"
              type="text"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
