import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 ">
        <div className="flex flex-col  items-center  ">
          <img src={assets.logo5} className="mb-5 w-16 rounded-full " alt="" />
          <p className="text-gray-600  w-full md:w-2/3 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            aperiam repudiandae iure provide
          </p>
        </div>

        <div className="flex flex-col  items-center  ">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="flex flex-col  items-center  ">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600">
            <li>+91-9315966203</li>
            <li>sy7841846@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <div className="text-xs font-semibold h-10 text-gray-600 flex justify-center items-center ">
        Copyright 2024@ forever.com - All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
