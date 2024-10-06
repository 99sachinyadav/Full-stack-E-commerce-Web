import { assets } from "../assets/assets"

 

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row  border  border-gray-400">
     {/* left side */}

     <div className="w-full sm:w-[50%] flex flex-col justify-center items-center py-10 sm:py-0">
       <div className="text-[#414141]">
        <div className=" flex gap-2 items-center">
         <p className="  w-8 md:w-11 text-left h-[2px]  bg-[#414141]"></p>
         <p className=" text-left font-medium text-sm ">OUR BESTSELLERS</p>
        </div>

       </div>
       <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
       <div className=" flex gap-2 items-center">
         
         <p className=" text-left font-medium text-sm "> SHOP NOW</p>
         <p className=" text-left h-[1px] w-8 md:w-11 bg-[#414141]"></p>
        </div>
     </div>

      
        <img  className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
 

    </div>
  )
}

export default Hero