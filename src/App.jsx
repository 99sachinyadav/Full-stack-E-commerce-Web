import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Order from "./pages/Order"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Chatbot from "./components/Chatbot"

export const apiUrl = import.meta.env.VITE_API_KEY;
 
function App() {
 

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer/>
         <Navbar/> 
         <SearchBar/>
        <Routes>
           <Route path="/chatbot" element={<Chatbot  />} />
         <Route path='/' element={<Home/>} />
         <Route path='/collection' element={<Collection/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/order' element={<Order/>} />
         <Route path='/placeorder' element={<PlaceOrder/>} />
         <Route path='/product/:productId' element={<Product/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
