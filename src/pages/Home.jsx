 
import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import Policy from "../components/Policy"
import NewForm from "../components/Newform"
import Chatboticon from "../components/Chatboticon"

 

const Home = () => {
  return (
     <>
     <Chatboticon className="w-96" />
     <Hero/>
     <LatestCollection/>
     <BestSeller/>
     <Policy/>
     <NewForm/>
     </>
  )
}

export default Home