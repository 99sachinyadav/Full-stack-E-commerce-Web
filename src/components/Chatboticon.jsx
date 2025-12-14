 
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Chaticon from  "../assets/Chaticon.png";
const Chatboticon = () => {
    const navigate = useNavigate();
    const [open, setopen] = useState(true);
       const location = useLocation();
    useEffect(() => {
    if (location.pathname === "/chatbot") {
      setopen(false);
    } else {
      setopen(true);
    }
  }, [location.pathname]); 
  return (
         <div onClick={()=>{navigate('/chatbot'),setopen(false)}} className={` sticky top-[620px] flex items-center justify-center  w-24 h-24   rounded-full ${open?"block":"hidden"}  ml-auto mr-[-20px] sm:mr-[-150px] z-50`}>
     <img  className="w-30 h-30" src={Chaticon} alt="" />
  </div>
  )
}

export default Chatboticon