import { useContext, useEffect, useState } from "react"
import { Shopcontext } from "../context/Shopcontext"
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

 
const SearchBar = () => {

  const {search ,setSearch,showSearch,setShowSearch}=   useContext(Shopcontext);
  const [visibal,setvisibal]=useState(false)
  const location= useLocation();

    useEffect(()=>{
      if(location.pathname.includes('collection') ){
          setvisibal(true)
      }
      else{
        setvisibal(false)
      }
    },[location])
  return ( showSearch && visibal)? (
    <div className="border-t border-b text-center bg-gray-50">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded  w-3/4">
      <input value={search}  onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search" />
      <img src={assets.search_icon} className="w-4" alt="" />
      </div>
       <img onClick={()=>setShowSearch(!showSearch)} src={assets.cross_icon} className=" inline w-3 cursor-pointer" alt="" />
    </div>
  ):null
}

export default SearchBar