import { assets } from "../assets/assets"
import NewForm from "../components/Newform"
import Tital from "../components/Tital"

 
const About = () => {
  return (
    <div  >
      <div className="text-2xl text-center pt-8 border-t">
        <Tital text1={'ABOUT'} text2={'US'}/>
      </div>
       <div className="flex  my-8  flex-col md:flex-row gap-10">
         <img src={assets.about_img} className="w-full md:max-w-[450px]  " alt="" />
         <div className="flex   flex-col  justify-center   gap-6  md:w-2/4  text-gray-600">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam totam enim debitis porro quas obcaecati, odio minus eius repudiandae neque corporis, magni, rem veritatis soluta labore. Voluptate, debitis sint?
          Nobis iure exercitationem assumenda nihil quisquam officiis consequuntur ipsam molestia.</p>
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam, ipsa perspiciatis quae rerum aperiam cumque repellendus eveniet minima commodi numquam quos laborum id eaque quia consequuntur, officia facere veniam?
          Consequatur in repellat eaque? Laboriosam amet corporis facere. Opti.</p>
           <b className="text-gray-800">Our Mission</b>
          <p  > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error asperiores, et voluptatibus, porro recusandae nam voluptatem consequuntur corporis mollitia dignissimos quidem magnam necessitatibus illo? Earum eum enim aspernatur similique placeat!</p>
          </div>
         
       </div>
        <div className="text-2xl py-4">
            <Tital text1={"WHY"} text2={'CHOOSE US'}/>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
             <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurence</b>
              <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias, aliquam repellat laborum odit in ducimus perferendis quod nihi</p>
             </div>
             <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convinience:</b>
              <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias, aliquam repellat laborum odit in ducimus perferendis quod nihi</p>
             </div>
             <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer service :</b>
              <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias, aliquam repellat laborum odit in ducimus perferendis quod nihi</p>
             </div>
        </div>
        <NewForm/>
    </div>

      

  )
}

export default About