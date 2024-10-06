import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className=" flex items-center px-[4%] py-2 justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 px-5 py-2 sm:px-7 sm:py-2 text-white rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
