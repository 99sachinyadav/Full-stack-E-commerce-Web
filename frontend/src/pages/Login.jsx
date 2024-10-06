import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { navigate, token, setToken, backendUrl } = useContext(Shopcontext);
  const [currentState, setcurrentState] = useState("Login");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Submithandler = async (e) => {
    e.preventDefault();
    if (currentState === "Sign up") {
      try {
        const responce = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (responce.data.sucess) {
          setToken(responce.data.token);
          localStorage.setItem('token',responce.data.token)
          toast.success(responce.data.message);
        }
        else{
          toast.error(responce.data.message)
         }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    } else {
        
      try {
        const responce = await axios.post(backendUrl+'/api/user/login',{email,password});
         console.log(responce)
         if(responce.data.sucess){
          setToken(responce.data.refreshToken)
          toast.success(responce.data.message)
         }
         else{
          toast.error(responce.data.message)
         }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token])

  return (
    <form
      onSubmit={Submithandler}
      className="flex flex-col items-center w-[90%] sm:w-96 m-auto text-gray-800 mt-14 gap-4"
    >
      <div className="inline-flex items-center  gap-2 mb-2 mt-10">
        <p className="text-3xl font-medium">{currentState}</p>
        <hr className="border-none h-[1.7px] w-8 bg-gray-500  " />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        required
        type="Password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setcurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create a account
          </p>
        ) : (
          <p
            onClick={() => setcurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="  bg-black text-white px-8 py-2 mt-4 rounded-md "
        >
          {currentState === "Login" ? "Sign In" : "Sign UP"}
        </button>
      </div>
    </form>
  );
};

export default Login;
