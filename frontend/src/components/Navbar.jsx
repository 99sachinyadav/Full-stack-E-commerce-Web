import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";

const Navbar = () => {
  const [visibal, setvisibal] = useState(false);
  const {
    showSearch,
    setShowSearch,
    getCounts,
    token,
    setToken,
    navigate,
    setCartItem,
  } = useContext(Shopcontext);

  const logOut = () => {
    navigate("/login");
    setToken("");
    localStorage.removeItem("token");
    setCartItem({});
  };
  return (
    <div className="flex  items-center justify-between py-5 font-medium">
      <Link to="/">
        {" "}
        <img
          src={assets.logo5}
          className="w-16 rounded-full mix-blend-multiply bg-white"
          alt=""
        />
      </Link>
      <ul className=" hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(!showSearch)}
          src={assets.search_icon}
          className="w-5 cursor-pointer   "
          alt=""
        />
        <div className="group relative">
          {/* Dropdown coad */}
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer "
            alt=""
          />
          {token && (
            <div className="group-hover:block hidden absolute  dropdown-menu right-0 pt-4">
              <div className="flex flex-col bg-slate-100 w-36  gap-2 text-gray-500 rounded py-3 px-5">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/order")}
                  className="cursor-pointer hover:text-black"
                >
                  orders
                </p>
                <p onClick={logOut} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute  bg-black text-white rounded-full  w-4   text-center right-[-4px] top-[10px] text-[10px] aspect-square ">
            {getCounts()}
          </p>
        </Link>
        <img
          onClick={() => setvisibal(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white ${
          visibal ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setvisibal(false)}
            className="flex items-center gap-3 mt-4 ml-5"
          >
            <img
              className="rotate-180  w-2"
              src={assets.dropdown_icon}
              alt=""
            />
            <p className=" text-2xl ml-4 text-slate-600">Back</p>
          </div>
          <NavLink
            onClick={() => setvisibal(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setvisibal(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setvisibal(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setvisibal(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
