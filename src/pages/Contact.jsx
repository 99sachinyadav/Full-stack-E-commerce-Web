import { assets } from "../assets/assets"
import NewForm from "../components/Newform"
import Tital from "../components/Tital"

 

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 border-t">
        <Tital text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-20 mb-28">
        <img src={assets.contact_img} alt="" className=" w-full md:max-w-[450px]" />
        <div className=" flex flex-col items-start justify-center gap-3">
          <p className="text-sm  font-semibold text-gray-600">Our Store </p>
          <p className="text-gray-500 text-sm">Rajnagar Extention<br/>A-650 Rajeev Colony</p>
          <p className="text-gray-500 text-sm">+91-9315966203<br/> sy7841846@gmail.com<br/>Ratnesh34@gmail.com<br/>raj67@gmail.com</p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-500 text-sm">Learn more about our terms and job opening</p>
          <button className="px-4 py-2 border border-gray-500 text-sm mt-4 hover:bg-black hover:text-white transition duration-400 ease-in">Explore more</button>
        </div>
      </div>
        <NewForm/>
    </div>
  )
}

export default Contact