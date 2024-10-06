import { assets } from "../assets/assets"

 

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row   justify-around text-center items-center gap-10 sm:gap-4  py-6 ">
        <div className="flex flex-col justify-center items-center  sm:py-8">
            <img src={assets.exchange_icon} className="   h-8 sm:h-16 md:h-10 " alt="" />
            <p className=" font-semibold text-gray-600 ">EASY EXCHANGE POLICY</p>
            <p className=" text-center text-xs sm:text-sm leading-[1.2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <img src={assets.support_img} className="   h-8 sm:h-16 md:h-10 " alt="" />
            <p className=" font-semibold text-gray-600">EASY EXCHANGE POLICY</p>
            <p className=" text-center text-xs sm:text-sm leading-[1.2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <img src={assets.quality_icon} className="   h-8 sm:h-16 md:h-10 " alt="" />
            <p className=" font-semibold text-gray-600">EASY EXCHANGE POLICY</p>
            <p className=" text-center text-xs sm:text-sm leading-[1.2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

    </div>
  )
}

export default Policy